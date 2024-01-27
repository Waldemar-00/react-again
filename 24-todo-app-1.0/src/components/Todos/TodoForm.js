import styles from './TodoForm.module.css'
import Input from '../UI/Input'
import Button from '../UI/Button'
function TodoForm({ className, getInputValue }) {
  function handleSubmit(e) {
    e.preventDefault()
    const value = e.target.input.value.trim()
    if (value !== '') getInputValue(value)
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
