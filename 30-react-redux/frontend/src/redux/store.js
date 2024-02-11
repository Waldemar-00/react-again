import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './books/reducer'
import filterSlice from './slices/filterSlice'

const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterSlice.reducer,
    favorite: filterSlice.favorite,
  },
})
export default store
