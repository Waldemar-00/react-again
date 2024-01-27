import './App.css'
import Heading from './components/Header/Heading'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
function App() {
  function getInputValue(value) {
    return value
  }
  return (
    <div className='App'>
      <Heading />
      <TodoForm
        className='todoForm'
        getInputValue={getInputValue}
      />
      <TodoList className='todoList' />
    </div>
  )
}

export default App
