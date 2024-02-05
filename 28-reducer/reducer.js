const prevState = []
function reducer(state, action) {
  if (action.type === 'ADD_NAME') {
    return [...state, action.payload]
  }
  if (action.type === 'DELETE_NAME') {
    return state.filter((name) => action.payload !== name)
  }
  if (action.type === 'CLEAR_NAMES') {
    return []
  }
  return state
}
let newState = reducer(prevState, { type: 'ADD_NAME', payload: 'Bogdan' })
console.log(newState)
newState = reducer(newState, { type: 'ADD_NAME', payload: 'Uladzimir' })
console.log(newState)
newState = reducer(newState, { type: 'ADD_NAME', payload: 'Magdalena' })
console.log(newState)
newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Bogdan' })
console.log(newState)
newState = reducer(newState, { type: 'CLEAR_NAMES', payload: 'Bogdan' })
console.log(newState)
