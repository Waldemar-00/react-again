import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/about'>
        About
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/courses'>
        Courses
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? { color: ' yellow', fontStyle: 'italic' } : {})} to='/contacts'>
        Contacts
      </NavLink>
    </nav>
  )
}

export default Header
