import store from './redux/store.js'
import getCurrentTime from './utils/getCurrentTime.js'
import { addCurrentTime, clearAllTimes } from './redux/actionCreators.js'
const unsubscribe = store.subscribe(() => {
  const storeArray = store.getState()
  document.querySelector('section').innerHTML = ''
  //! or :
  // document.querySelectorAll('section div').forEach((item) => {
  //!   item.parentNode.removeChild(item)
  // })
  storeArray.map((item, index) => {
    document.querySelector('section').append(document.createElement('div'))
    document.querySelectorAll('div')[index].innerText = item
  })
})

document.querySelector('#btnAdd').addEventListener('click', () => store.dispatch(addCurrentTime(getCurrentTime())))

document.querySelector('#btnDel').addEventListener('click', () => store.dispatch(clearAllTimes()))
