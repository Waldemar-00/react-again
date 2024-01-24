import React from 'react'
import './Login.css'
function Login() {
  // const [username, setUsername] = React.useState('')
  // const [password, setPassword] = React.useState('')
  const [userData, setUserData] = React.useState({ username: '', password: '' })
  function changeName(e) {
    // setUsername(e.target.value)
    setUserData({ ...userData, username: e.target.value })
    console.log(userData.username)
  }
  function changePassword(e) {
    // setPassword(e.target.value)
    setUserData({ ...userData, password: e.target.value })
    console.log(userData.password)
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
          onChange={changeName}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          value={userData.password}
          onChange={changePassword}
        />
      </label>
      <button type='submit'>Login</button>
    </form>
  )
}
export default Login
