import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import './BookList.css'
const BookList = () => {
  const books = useSelector((state) => state.books, shallowEqual)
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
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

export default BookList
