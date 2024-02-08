import { configureStore } from '@reduxjs/toolkit'
import books from './books/reducer'

const store = configureStore({
  reducer: {
    books,
  },
})
export default store
