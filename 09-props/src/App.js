import './App.css'
import PetInfo from './components/PetInfo'
function App() {
  return (
    <div className='App'>
      <PetInfo
        animal='Cat'
        age='two'
      />
      <PetInfo
        animal='Dog'
        age='four'
      />
    </div>
  )
}

export default App
