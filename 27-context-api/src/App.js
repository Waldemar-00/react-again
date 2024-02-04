import { useState } from 'react'
import './App.css'
import User from './components/User'

function App() {
  const [userName, setUserName] = useState('ULADZIMIR')

  return (
    <div className='App'>
      <User name={userName} />
    </div>
  )
}

export default App
