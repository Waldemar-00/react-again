import * as aT from './actionTypes'

export const addBook = (newBook) => {
  return { type: aT.ADD_BOOK, payload: newBook }
}
export const delBook = (id) => {
  return { type: aT.DEL_BOOK, payload: id }
}
export const addRandomBook = (randomBook) => {
  return { type: aT.ADD_RANDOM_BOOK, payload: randomBook }
}
export const changeFavorite = (id) => {
  return { type: aT.CHANGE_FAVORITE, payload: id }
}
