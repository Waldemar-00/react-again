import './Persons.css'
import { persons } from '../data/persons'
import Person from './Person'
function Persons() {
  return (
    <>
      <h1>Person data</h1>
      <div className='cards'>
        {persons.map((person) => {
          return (
            <Person
              key={person.id}
              {...person}
            />
          )
        })}
      </div>
    </>
  )
}
export default Persons
