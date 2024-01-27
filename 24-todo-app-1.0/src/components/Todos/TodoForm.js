import React from 'react'
import styles from './TodoForm.module.css'
import Input from '../UI/Input'
import Button from '../UI/Button'
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
      <Input
        type='text'
        placeholder='Enter new todo'
        className='addTodo'
        name='input'
        value={value}
        handleChangeValue={handleChangeValue}
        handleBlur={handleBlur}
      />
      <Button
        type='submit'
        text={'Submit'}
        className='addTodo'
      />
    </form>
  )
}
export default TodoForm
