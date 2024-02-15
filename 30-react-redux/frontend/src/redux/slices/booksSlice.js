import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '../../utils/createBookWithId'
import { setError } from './errorSlice'

export const fetchBook = createAsyncThunk('books/fetchBook', async (URL, thunkAPI) => {
  try {
    const res = await axios.get(URL)
    return res.data
  } catch (error) {
    thunkAPI.dispatch(setError(error.message))
    throw error //! we don't get there to the fulfild
    //! console.error(error) - we don't get error -  see cause below
  }
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
  // extraReducers: {
  //   [fetchBook.pending]: () => {},
  //   [fetchBook.fulfilled]: (state, action) => {
  //     if (action.payload?.title && action.payload?.author) state.push(createBookWithId(action.payload, 'API'))
  //   },
  //   [fetchBook.rejected]: () => console.log('We get to the REJECTED thanks to throw error'),
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, () => {})
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      //!!! I don't have any problem with rendering because - the optional chaining!
      if (action.payload?.title && action.payload?.author) state.push(createBookWithId(action.payload, 'API'))
      //!!! I don't have any problem with rendering because - the optional chaining!
    })
    builder.addCase(fetchBook.rejected, () => {
      console.log('We get to the REJECTED thanks to throw error')
    })
  },
})
export default books
