import { v4 } from 'uuid'
const createBookWithId = (book, sourse) => {
  return {
    ...book,
    id: v4(),
    isFavorite: false,
    sourse,
  }
}
export default createBookWithId
