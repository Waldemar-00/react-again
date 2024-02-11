import { configureStore } from '@reduxjs/toolkit'
// import bookReducer from './books/reducer'
import filterSlice from './slices/filterSlice'
import booksSlice from './slices/booksSlice'

const store = configureStore({
  reducer: {
    // books: bookReducer,
    books: booksSlice.reducer,
    filter: filterSlice.reducer,
    favorite: filterSlice.reducer,
  },
})
export default store
