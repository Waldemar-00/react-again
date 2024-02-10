import React from 'react'
import { useDispatch } from 'react-redux'
import * as aC from '../../redux/books/actionCreators'
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
      dispatch(aC.addBook(createBookWithId({ title, author })))
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
    dispatch(aC.addRandomBook(createBookWithId(randomBooks[index])))
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
      </form>
    </div>
  )
}

export default BookForm
