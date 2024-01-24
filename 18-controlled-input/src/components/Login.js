import React from 'react'
import './Login.css'
function Login() {
  const [userData, setUserData] = React.useState({ username: '', password: '' })
  function changeInputValues(e, name) {
    setUserData({ ...userData, [name]: e.target.value })
    console.log(userData[name])
  }
  function onSubmitHandle(e) {
    e.preventDefault()
    console.log(userData)
    alert(JSON.stringify(userData))
  }
  return (
    <form onSubmit={(e) => onSubmitHandle(e)}>
      <label>
        Username:
        <input
          type='text'
          value={userData.username}
          onChange={(e) => changeInputValues(e, 'username')}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          value={userData.password}
          onChange={(e) => changeInputValues(e, 'password')}
        />
      </label>
      <button type='submit'>Login</button>
    </form>
  )
}
export default Login
