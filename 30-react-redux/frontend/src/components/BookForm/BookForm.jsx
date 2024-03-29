import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import books from '../../redux/slices/booksSlice'
import randomBooks from '../../data/books.json'
import createBookWithId from '../../utils/createBookWithId'
import { fetchBook } from '../../redux/slices/booksSlice'
import error from '../../redux/slices/errorSlice'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const isLoading = useSelector((state) => state.books.isLoadingViaAPI)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      dispatch(books.actions.addBook(createBookWithId({ title, author }, 'manually')))
      setTitle('')
      setAuthor('')
    } else {
      dispatch(error.actions.setError('You must fill title and author!'))
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
    dispatch(books.actions.addRandomBook(createBookWithId(randomBooks[index], 'random')))
  }
  // const handleGetBookViaAPI = async () => {
  //   try {
  //     dispatch(books.actions.toggleLoading())
  //     await dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
  //   } finally {
  //     dispatch(books.actions.toggleLoading())
  //   }
  // }
  const handleGetBookViaAPI = () => dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
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
        <button type='button' disabled={isLoading} onClick={handleGetBookViaAPI}>
          {isLoading ? (
            <>
              <span>Loading Book... </span> <FaSpinner className='spinner' />
            </>
          ) : (
            'Add random via API'
          )}
        </button>
      </form>
    </div>
  )
}

export default BookForm
