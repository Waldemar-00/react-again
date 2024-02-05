import { configureStore } from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@2.1.0/+esm'
import reducer from './reducer.js'

export default configureStore({ reducer })
