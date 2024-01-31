import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound404 from './components/NotFound404'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='contacts'
            element={<Contacts />}
          />
          <Route
            path='*'
            element={<NotFound404 />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
