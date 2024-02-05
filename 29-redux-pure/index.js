import store from './redux/store.js'

store.dispatch({ type: 'ADD_CURRENT_TIME', payload: Date.now() })
store.dispatch({ type: 'ADD_CURRENT_TIME', payload: Date.now() })
store.dispatch({ type: 'ADD_CURRENT_TIME', payload: Date.now() })
console.log(store.getState(), store)
store.dispatch({ type: 'CLEAR_ALL_TIMES' })
console.log(store.getState(), store)
