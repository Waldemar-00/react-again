import './App.css'
import PetInfo from './components/PetInfo'
function App() {
  return (
    <div className='App'>
      <PetInfo
        animal='Cat'
        age='two'
        isHasAnimal={true}
      />
      <PetInfo
        animal='Dog'
        age='four'
        isHasAnimal //without value 'true'
      />
      <PetInfo isHasAnimal={false} />
    </div>
  )
}

export default App
