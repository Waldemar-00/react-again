import React from 'react'
import './BookForm.css'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { addBook } from '../../redux/books/actionCreators'

const BookForm = () => {
  const [bookTitle, setBookTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (bookTitle && author) {
      dispatch(addBook({ bookTitle, author, id: v4() }))
      setBookTitle('')
      setAuthor('')
    }
  }
  const handleBookTitleChange = (e) => {
    setBookTitle(e.target.value)
  }
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
  }
  return (
    <div className='app-block book-form'>
      <h2>Add a new book</h2>
      <form className='book-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='bookTitle'>Book title:</label>
          <input id='bookTitle' type='text' value={bookTitle} onChange={handleBookTitleChange} />
        </div>
        <div>
          <label htmlFor='author'>Author:</label>
          <input id='author' type='text' value={author} onChange={handleAuthorChange} />
        </div>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default BookForm
