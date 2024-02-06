import store from './redux/store.js'
import getCurrentTime from './utils/getCurrentTime.js'

const unsubscribe = store.subscribe(() => {
  const storeArray = store.getState()
  document.querySelector('section').innerHTML = ''
  storeArray.map((item, index) => {
    document.querySelector('section').append(document.createElement('div'))
    document.querySelectorAll('div')[index].innerText = item
  })
})

document
  .querySelector('#btnAdd')
  .addEventListener('click', () => store.dispatch({ type: 'ADD_CURRENT_TIME', payload: getCurrentTime() }))

document.querySelector('#btnDel').addEventListener('click', () => {
  store.dispatch({ type: 'CLEAR_ALL_TIMES' })
  document.querySelectorAll('section div').forEach((item) => {
    item.parentNode.removeChild(item)
  })
})
