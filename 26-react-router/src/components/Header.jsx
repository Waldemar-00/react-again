import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/about/other'>Other</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
    </nav>
  )
}

export default Header
