import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './books/reducer'

const store = configureStore({
  reducer: {
    bookReducer,
  },
})
export default store
