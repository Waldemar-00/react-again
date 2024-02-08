import * as aT from './actionTypes'

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case aT.ADD_BOOK:
      return [...state, action.payload]
    case aT.DEL_BOOK:
      return state.filter((book) => book.id !== action.payload)
    case aT.ADD_RANDOM_BOOK:
      return [...state, action.payload]
    default:
      return state
  }
}
export default bookReducer
