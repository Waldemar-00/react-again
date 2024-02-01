import { Link } from 'react-router-dom'

const Contacts = () => {
  return (
    <>
      <h2>Contacts</h2>
      <h3>
        <Link to='/about'>About</Link>
      </h3>
      <h3>
        <Link to='/'>Home</Link>
      </h3>
    </>
  )
}
export default Contacts
