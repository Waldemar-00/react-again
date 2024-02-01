import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <>
      <h2>Not found 404</h2>
      <h3>
        <Link to='/'>Home</Link>
      </h3>
      <h3>
        <Link to='/about'>About</Link>
      </h3>
      <h3>
        <Link to='/contacts'>Contacts</Link>
      </h3>
    </>
  )
}
export default NotFound404
