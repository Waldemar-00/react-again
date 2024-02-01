import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <h2>About</h2>
      <h3>
        <Link to='/contacts'>Contacts</Link>
      </h3>
      <h3>
        <Link to='/'>Home</Link>
      </h3>
    </>
  )
}
export default About
