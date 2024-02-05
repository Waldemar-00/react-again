import store from './redux/store.js'

const unsubscribe = store.subscribe(() => console.log(store.getState()))

document
  .querySelector('#btnAdd')
  .addEventListener('click', () => store.dispatch({ type: 'ADD_CURRENT_TIME', payload: Date.now() }))
document.querySelector('#btnDel').addEventListener('click', () => store.dispatch({ type: 'CLEAR_ALL_TIMES' }))
