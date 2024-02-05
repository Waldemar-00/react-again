import store from './redux/store.js'

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'ADD_CURRENT_TIME', payload: Date.now() })
store.dispatch({ type: 'ADD_CURRENT_TIME', payload: Date.now() })
store.dispatch({ type: 'ADD_CURRENT_TIME', payload: Date.now() })
store.dispatch({ type: 'CLEAR_ALL_TIMES' })
