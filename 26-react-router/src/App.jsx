import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './components/MainLayout'
import Home from './components/Home'
import Other from './components/Other'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound404 from './components/NotFound404'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='other' element={<Other />} />
            <Route path='about' element={<About />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound404 />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
