import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import books from './slices/booksSlice'
import error from './slices/errorSlice'

const store = configureStore({
  reducer: {
    books: books.reducer,
    filter: filter.reducer,
    error: error.reducer,
  },
})
export default store
