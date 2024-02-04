import { useState } from 'react'
import './App.css'
import User from './components/User'
import UserContext from './context/UserContext'
function App() {
  const [userName, setUserName] = useState('ULADZIMIR')

  return (
    <UserContext.Provider value={userName}>
      <div className='App'>
        <User />
      </div>
    </UserContext.Provider>
  )
}

export default App
