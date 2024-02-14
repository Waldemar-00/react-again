import { createSlice } from '@reduxjs/toolkit'

const error = createSlice({
  name: 'error',
  initialState: '',
  redusers: {
    setError: (_, action) => action.payload,
    clearError: () => '',
  },
})
export default error
