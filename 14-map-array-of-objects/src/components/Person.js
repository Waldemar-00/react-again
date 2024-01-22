import './Person.css'
function Person({ firstName, lastName, email, img }) {
  return (
    <section>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{email}</div>
      <div>{img}</div>
      <hr />
    </section>
  )
}
export default Person
