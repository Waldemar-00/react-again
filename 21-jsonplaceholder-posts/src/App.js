import './App.css'
import Posts from './components/Posts'
function App() {
  return (
    <div className='App'>
      <h1 style={{ color: 'yellowgreen' }}>ALL POST from JSONPLACEHOLDER</h1>
      <Posts />
      <h2 style={{ color: 'yellowgreen' }}>FOOTER</h2>
    </div>
  )
}

export default App
