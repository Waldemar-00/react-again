import React from 'react'
import './BookForm.css'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import * as aC from '../../redux/books/actionCreators'
import randomBooks from '../../data/books.json'

const BookForm = () => {
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      dispatch(aC.addBook({ title, author, id: v4() }))
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
    dispatch(aC.addRandomBook({ ...randomBooks[index], id: v4() }))
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
