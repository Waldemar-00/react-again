import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '../../utils/createBookWithId'

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const res = await axios.get('http://localhost:4000/random-book')
  return res.data
})

const books = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    delBook: (state, action) => state.filter((book) => book.id !== action.payload),
    addRandomBook: (state, action) => [...state, action.payload],
    changeFavorite: (state, action) =>
      state.map((book) => (book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book)),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, () => {})
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload?.title && action.payload?.author) state.push(createBookWithId(action.payload, 'API'))
    })
    builder.addCase(fetchBook.rejected, () => {})
  },
})
// export const thunk = async (dispatch, getState) => {
//   try {
//     const response = await axios.get('http://localhost:4000/random-book')
//     if (response?.data?.title && response?.data?.author)
//       dispatch(booksSlice.actions.addBook(createBookWithId(response.data, 'api')))
//   } catch (error) {
//     console.error(error)
//   }
// }

export default books
