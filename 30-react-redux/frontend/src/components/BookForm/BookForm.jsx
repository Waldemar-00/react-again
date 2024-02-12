import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import booksSlice from '../../redux/slices/booksSlice'
import randomBooks from '../../data/books.json'
import createBookWithId from '../../utils/createBookWithId'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      dispatch(booksSlice.actions.addBook(createBookWithId({ title, author })))
      setTitle('')
      setAuthor('')
    }
  }
  const handleBookTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
  }
  const handleAddRandomBook = () => {
    const index = Math.floor(Math.random() * randomBooks.length)
    dispatch(booksSlice.actions.addRandomBook(createBookWithId(randomBooks[index])))
  }
  const handleGetBookViaAPI = async () => {
    try {
      const response = await axios.get('http://localhost:4000/random-book')
      if (response?.data?.title && response?.data?.author)
        dispatch(booksSlice.actions.addBook(createBookWithId(response.data)))
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='app-block book-form'>
      <h2>Add a new book</h2>
      <form className='book-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='bookTitle'>Book title:</label>
          <input id='bookTitle' type='text' value={title} onChange={handleBookTitleChange} />
        </div>
        <div>
          <label htmlFor='author'>Author:</label>
          <input id='author' type='text' value={author} onChange={handleAuthorChange} />
        </div>
        <button type='submit'>Add Book</button>
        <button type='button' onClick={handleAddRandomBook}>
          Add random Book
        </button>
        <button type='button' onClick={handleGetBookViaAPI}>
          Add random via API
        </button>
      </form>
    </div>
  )
}

export default BookForm
