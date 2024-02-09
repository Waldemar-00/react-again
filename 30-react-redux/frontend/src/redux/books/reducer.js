import * as aT from './actionTypes'

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case aT.ADD_BOOK:
      return [...state, action.payload]
    case aT.DEL_BOOK:
      return state.filter((book) => book.id !== action.payload)
    case aT.ADD_RANDOM_BOOK:
      return [...state, action.payload]
    case aT.CHANGE_FAVORITE:
      return state.map((book) => (book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book))
    default:
      return state
  }
}
export default bookReducer
