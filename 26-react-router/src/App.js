import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<h1>Home page</h1>}
          />
          <Route
            path='about'
            element={<h2>About page</h2>}
          />
          <Route
            path='contacts'
            element={<h2>Contacts page</h2>}
          />
          <Route
            path='*'
            element={<h2>Not found 404</h2>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
