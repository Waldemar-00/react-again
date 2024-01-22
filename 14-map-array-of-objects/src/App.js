import './App.css'
import Person from './components/Person'
import { persons } from './data/persons'
function App() {
  return (
    <div className='App'>
      {persons.map((person) => {
        const { id, firstName, lastName, email, img } = person
        return (
          <Person
            key={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            img={img}
          />
        )
      })}
    </div>
  )
}

export default App
