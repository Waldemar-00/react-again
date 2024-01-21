import './App.css'
import RandomNumber from './components/RandomNumber'
function App() {
  const maxNumber = 1000
  return (
    <div className='App'>
      <RandomNumber maxNumber={maxNumber} />
    </div>
  )
}

export default App
