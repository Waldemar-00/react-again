import React from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import * as aC from '../../redux/books/actionCreators'
import './BookList.css'
const BookList = () => {
  const books = useSelector((state) => state.books, shallowEqual)
  const dispatch = useDispatch()
  const handleDeleteBook = (id) => {
    const bookRest = books.filter((book) => book.id !== id)
    dispatch(aC.delBook(bookRest))
  }
  return (
    <div className='app-block book-list'>
      <h2>Book List</h2>
      <ul>
        {books.length === 0 ? (
          <li style={{ justifyContent: 'center' }}>No books available</li>
        ) : (
          books.map((book, index) => {
            return (
              <li key={book.id}>
                <div className='book-info'>
                  {++index}. {book.title} by <strong>{book.author}</strong>
                </div>
                <button type='button' onDoubleClick={() => handleDeleteBook(book.id)}>
                  Del
                </button>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

export default BookList
