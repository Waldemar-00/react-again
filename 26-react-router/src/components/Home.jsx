import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>HOME</h1>
      <h3>
        <Link to='/about'>About</Link>
      </h3>
      <h3>
        <Link to='/contacts'>Contacts</Link>
      </h3>
    </>
  )
}
export default Home
