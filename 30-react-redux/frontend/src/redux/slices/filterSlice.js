import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  title: '',
  author: '',
  favorite: false,
}
const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => ({ ...state, title: action.payload }),
    setAuthorFilter: (state, action) => ({ ...state, author: action.payload }),
    setFavoriteFilter: (state) => ({ ...state, favorite: !state.favorite }),
    resetFilters: () => initialState,
  },
})
export default filter
