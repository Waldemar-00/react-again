import Input from '../UI/Input'
import Button from '../UI/Button'
function TodoForm() {
  return (
    <form>
      <Input
        type='text'
        placeholder='Enter new todo'
      />
      <Button text={'Submit'} />
    </form>
  )
}
export default TodoForm
