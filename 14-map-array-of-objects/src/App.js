import './App.css'
import Person from './components/Person'
import { persons } from './data/persons'
function App() {
  return (
    <div className='App'>
      <h1>Person data</h1>
      {persons.map((person) => {
        return (
          <Person
            key={person.id}
            {...person}
          />
        )
      })}
    </div>
  )
}

export default App
