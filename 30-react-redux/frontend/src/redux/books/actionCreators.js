import * as aT from './actionTypes'

export const addBook = (newBook) => {
  return { type: aT.ADD_BOOK, payload: newBook }
}
export const delBook = (id) => {
  return { type: aT.DEL_BOOK, payload: id }
}
