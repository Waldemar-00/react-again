import { persons } from '../data/persons'
import Person from './Person'
function Persons() {
  return (
    <>
      <h1>Person data</h1>
      {persons.map((person) => {
        return (
          <Person
            key={person.id}
            {...person}
          />
        )
      })}
    </>
  )
}
export default Persons
