import styles from './TodoForm.module.css'
import Input from '../UI/Input'
import Button from '../UI/Button'
function TodoForm({ className }) {
  return (
    <form className={styles[className]}>
      <Input
        type='text'
        placeholder='Enter new todo'
        className='addTodo'
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
