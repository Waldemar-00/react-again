import Button from '../UI/Button'
function TodoForm() {
  return (
    <form>
      <input
        type='text'
        placeholder='Enter new todo'
      />
      <Button text={'Submit'} />
    </form>
  )
}
export default TodoForm
