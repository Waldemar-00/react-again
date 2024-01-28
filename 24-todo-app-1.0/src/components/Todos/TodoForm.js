import React from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ className, getInputValue }) {
  const [value, setValue] = React.useState('')
  function handleChangeValue(value) {
    setValue(value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    const value = e.target.input.value.trim()
    if (value !== '') getInputValue(value)
    setValue('')
  }
  function handleBlur(value) {
    if (value.trim() === '') setValue('')
  }
  return (
    <form
      className={styles[className]}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Enter new todo'
        className={styles.addTodo}
        name='input'
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
        onBlur={(e) => handleBlur(e.target.value)}
      />
      <button
        type='submit'
        className={styles.submitButton}
      >
        Submit
      </button>
    </form>
  )
}
export default TodoForm
