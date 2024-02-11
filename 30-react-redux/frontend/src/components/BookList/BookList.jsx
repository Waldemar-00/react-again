import React from 'react'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import * as aC from '../../redux/books/actionCreators'
import './BookList.css'

const BookList = () => {
  const books = useSelector((state) => state.books, shallowEqual)
  const filterTitle = useSelector((state) => state.filter.title)
  const filterAuthor = useSelector((state) => state.filter.author)
  const filterFavorite = useSelector((state) => state.filter.favorite)
  const dispatch = useDispatch()
  const handleDeleteBook = (id) => {
    dispatch(aC.delBook(id))
  }
  const handleChangeFavorite = (id) => {
    dispatch(aC.changeFavorite(id))
  }
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      book.author.toLowerCase().includes(filterAuthor.toLowerCase()) &&
      (filterFavorite ? book.isFavorite : true),
  )
  return (
    <div className='app-block book-list'>
      <h2>Book List</h2>
      <ul>
        {filteredBooks.length === 0 ? (
          <li style={{ justifyContent: 'center' }}>No books available</li>
        ) : (
          filteredBooks.map((book, index) => {
            return (
              <li key={book.id}>
                <div className='book-info'>
                  {++index}. {book.title} by <strong>{book.author}</strong>
                </div>
                <div className='book-actions'>
                  <span onClick={() => handleChangeFavorite(book.id)}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className='star-icon' />
                    ) : (
                      <BsBookmarkStar className='star-icon' />
                    )}
                  </span>
                  <button type='button' onDoubleClick={() => handleDeleteBook(book.id)}>
                    Del
                  </button>
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
