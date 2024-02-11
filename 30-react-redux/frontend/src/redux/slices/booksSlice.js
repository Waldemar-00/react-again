import { createSlice } from '@reduxjs/toolkit'

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    delBook: (state, action) => state.filter((book) => book.id !== action.payload),
    addRandomBook: (state, action) => [...state, action.payload],
    changeFavorite: (state, action) =>
      state.map((book) => (book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book)),
  },
})

export default booksSlice
