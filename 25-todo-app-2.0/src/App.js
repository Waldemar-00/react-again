import React from 'react'
import { v4 } from 'uuid'
import './App.css'
import Heading from './components/Header/Heading'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
function App() {
  const [notes, setNotes] = React.useState([])
  function getInputValue(value) {
    const newNote = {
      text: value,
      isDone: false,
      id: v4(),
    }
    setNotes([...notes, newNote])
  }
  function handleDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id))
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
