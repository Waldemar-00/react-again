import React from 'react'
import styles from './Input.module.css'
function Input({ type, placeholder, className }) {
  const [value, setvalue] = React.useState('')
  function handleChangeValue(e) {
    setvalue(e.target.value)
  }
  return (
    <input
      className={styles[className]}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChangeValue}
    />
  )
}
export default Input
