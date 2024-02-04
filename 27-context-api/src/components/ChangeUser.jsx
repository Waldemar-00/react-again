import React from 'react'
import UserContext from '../context/UserContext'
const ChangeUser = () => {
  const [value, setValue] = React.useState('')
  const { setUserName } = React.useContext(UserContext)
  function handleChangeUser() {
    setUserName(value)
  }
  function handleChangeValue(e) {
    setValue(e.target.value)
  }
  return (
    <>
      <input type='text' value={value} onChange={handleChangeValue} />
      <button type='button' onClick={handleChangeUser}>
        Change user!
      </button>
    </>
  )
}

export default ChangeUser
