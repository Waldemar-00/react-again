import './Person.css'
function Person({ firstName, lastName, email, img }) {
  return (
    <div className='card'>
      <img
        src={img}
        alt='person'
      />
      <h2>
        {firstName} {lastName}
      </h2>
      <h3>{email}</h3>
    </div>
  )
}
export default Person
