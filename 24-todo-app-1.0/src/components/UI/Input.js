import React from 'react'
import styles from './Input.module.css'
function Input({ type, placeholder, className, name }) {
  const [value, setValue] = React.useState('')
  function handleChangeValue(e) {
    setValue(e.target.value)
  }
  function handlerBlur(e) {
    if (e.target.value.trim() === '') setValue('')
  }
  return (
    <input
      name={name}
      className={styles[className]}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChangeValue}
      onBlur={handlerBlur}
    />
  )
}
export default Input
