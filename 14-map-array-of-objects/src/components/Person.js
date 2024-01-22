import './Person.css'
function Person({ firstName, lastName, email, img }) {
  return (
    <section>
      <h2>
        {firstName} {lastName}
      </h2>
      <h3>{email}</h3>
      <img
        src={`${img}`}
        alt='person'
      />
      <hr />
    </section>
  )
}
export default Person
