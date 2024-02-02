import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>
        Home
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/about'>
        About
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/about/other'>
        Other
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/contacts'>
        Contacts
      </NavLink>
    </nav>
  )
}

export default Header
