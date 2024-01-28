import React from 'react'
import './App.css'
import Heading from './components/Header/Heading'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
function App() {
  const [notes, setNotes] = React.useState([])
  function getInputValue(value) {
    setNotes([...notes, value])
  }
  function handleDeleteNote(index) {
    const array = [...notes]
    array.splice(index, 1)
    setNotes([...array])
  }
  return (
    <div className='App'>
      <Heading />
      <TodoForm getInputValue={getInputValue} />
      <TodoList
        className='todoList'
        notes={notes}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  )
}

export default App
