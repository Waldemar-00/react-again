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
  function handleChangeDone(id) {
    setNotes(
      notes.map((note) => {
        return note.id === id ? { ...note, isDone: !note.isDone } : { ...note }
      }),
    )
  }
  return (
    <div className='App'>
      <Heading />
      <TodoForm getInputValue={getInputValue} />
      <TodoList
        className='todoList'
        notes={notes}
        handleDeleteNote={handleDeleteNote}
        handleChangeDone={handleChangeDone}
      />
    </div>
  )
}

export default App
