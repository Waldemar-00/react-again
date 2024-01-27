import './App.css'
import Heading from './components/Header/Heading'
import TodoForm from './components/Todos/TodoForm'
function App() {
  return (
    <div className='App'>
      <Heading />
      <TodoForm className='TodoForm' />
    </div>
  )
}

export default App
