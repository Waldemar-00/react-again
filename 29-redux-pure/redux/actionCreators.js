import { ADD_CURRENT_TIME, CLEAR_ALL_TIMES } from './actionTypes.js'
export const addCurrentTime = (payload) => {
  return { type: ADD_CURRENT_TIME, payload }
}
export const clearAllTimes = () => {
  return { type: CLEAR_ALL_TIMES }
}
