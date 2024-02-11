import { v4 } from 'uuid'
const createBookWithId = (book) => {
  return {
    ...book,
    id: v4(),
    isFavorite: false,
  }
}
export default createBookWithId
