import React from 'react'
import './App.css'
import Heading from './components/Header/Heading'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
function App() {
  const [notes, setNotes] = React.useState([])
  function getInputValue(value) {
    return setNotes([...notes, value])
  }
  return (
    <div className='App'>
      <Heading />
      <TodoForm
        className='todoForm'
        getInputValue={getInputValue}
      />
      <TodoList
        className='todoList'
        notes={notes}
      />
    </div>
  )
}

export default App
