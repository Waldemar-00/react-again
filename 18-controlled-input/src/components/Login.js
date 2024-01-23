import React from 'react'
import './Login.css'
function Login() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  function changeName(e) {
    setUsername(e.target.value)
    console.log(username)
  }
  function changePassword(e) {
    setPassword(e.target.value)
    console.log(password)
  }
  function onSubmitHandle(e) {
    e.preventDefault()
    const userData = {
      username,
      password,
    }
    console.log(userData)
    alert(JSON.stringify(userData))
  }
  return (
    <form onSubmit={(e) => onSubmitHandle(e)}>
      <label>
        Username:
        <input
          type='text'
          value={username}
          onChange={changeName}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={changePassword}
        />
      </label>
      <button type='submit'>Login</button>
    </form>
  )
}
export default Login
