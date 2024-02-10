import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    title: '',
  },
  reducers: {
    setTitleFilter: (state, action) => ({ ...state, title: action.payload }),
    resetFilters: (state) => ({ ...state, title: '' }),
  },
})
export default filterSlice
