export const addCurrentTime = (payload) => {
  return { type: 'ADD_CURRENT_TIME', payload }
}
export const clearAllTimes = () => {
  return { type: 'CLEAR_ALL_TIMES' }
}
