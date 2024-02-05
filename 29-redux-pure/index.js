import store from './redux/store.js'

const unsubscribe = store.subscribe(() => {
  const storeArray = store.getState()
  storeArray.map((item, index) => {
    document.querySelector('section').append(document.createElement('div'))
    document.querySelectorAll('div')[index].innerText = item
  })
})

document
  .querySelector('#btnAdd')
  .addEventListener('click', () => store.dispatch({ type: 'ADD_CURRENT_TIME', payload: Date.now() }))

document.querySelector('#btnDel').addEventListener('click', () => {
  store.dispatch({ type: 'CLEAR_ALL_TIMES' })
  document.querySelectorAll('section div').forEach((item) => {
    item.parentNode.removeChild(item)
  })
})
