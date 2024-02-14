import { createSlice } from '@reduxjs/toolkit'

const errorSlice = createSlice({
  name: 'error',
  initialState: '',
  reducers: {
    setError: (_, action) => action.payload,
    clearError: () => '',
  },
})
export default errorSlice
