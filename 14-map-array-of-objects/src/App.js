import './App.css'
import Person from './components/Person'
import { persons } from './data/persons'
function App() {
  return (
    <div className='App'>
      <h1>Person data</h1>
      {persons.map(({ id, firstName, lastName, email, img }) => {
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
