import './Login.css'
function Login() {
  function onSubmitHandle(e) {
    e.preventDefault()
    const userData = {
      username: e.target.username.value,
      password: e.target.password.value,
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
          name='username'
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          name='password'
        />
      </label>
      <button type='submit'>Login</button>
    </form>
  )
}
export default Login
