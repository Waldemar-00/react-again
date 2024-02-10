import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    title: '',
    author: '',
  },
  reducers: {
    setTitleFilter: (state, action) => ({ ...state, title: action.payload }),
    setAuthorFilter: (state, action) => ({ ...state, author: action.payload }),
    resetFilters: (state) => ({ ...state, title: '', author: '' }),
  },
})
export default filterSlice
