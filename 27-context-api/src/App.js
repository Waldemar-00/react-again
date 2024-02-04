import { useState } from 'react'
import './App.css'
import User from './components/User'
import UserContext from './context/UserContext'
import ChangeUser from './components/ChangeUser'
function App() {
  const [userName, setUserName] = useState('MAGDALENA')

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className='App'>
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  )
}

export default App
