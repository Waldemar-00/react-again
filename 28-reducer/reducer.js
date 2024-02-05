const prevState = []
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload]
    case 'DELETE_NAME':
      return state.filter((name) => action.payload !== name)
    case 'CLEAR_NAMES':
      return []
    default:
      return state
  }
}
let newState = reducer(prevState, { type: 'ADD_NAME', payload: 'Bogdan' })
console.log(newState)
newState = reducer(newState, { type: 'ADD_NAME', payload: 'Uladzimir' })
console.log(newState)
newState = reducer(newState, { type: 'ADD_NAME', payload: 'Magdalena' })
console.log(newState)
newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Bogdan' })
console.log(newState)
newState = reducer(newState, { type: 'CLEAR_NAMES' })
console.log(newState)
newState = reducer(newState, { type: 'ADD_NAME', payload: 'Uladzimir' })
console.log(newState)
newState = reducer(newState, { type: 'ADD_NAME', payload: 'Magdalena' })
console.log(newState)
