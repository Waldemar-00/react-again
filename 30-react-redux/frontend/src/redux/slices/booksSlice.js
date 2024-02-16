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
    // throw error
    return thunkAPI.rejectWithValue(error)
  }
})

const books = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoadingViaAPI: false,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    delBook: (state, action) => {
      const index = state.books.findIndex((book) => book.id === action.payload)
      state.books.splice(index, 1)
    },
    addRandomBook: (state, action) => {
      state.books.push(action.payload)
    },
    changeFavorite: (state, action) => {
      state.books.map((book) => (book.id === action.payload ? (book.isFavorite = !book.isFavorite) : book))
    },
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingViaAPI = true
    })
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload?.title && action.payload?.author) state.books.push(createBookWithId(action.payload, 'API'))
      state.isLoadingViaAPI = false
    })
    builder.addCase(fetchBook.rejected, (state) => {
      state.isLoadingViaAPI = false
      //! We get to the REJECTED thanks to throw error or rejectWithValue(error) - see upper
    })
  },
})
export default books
