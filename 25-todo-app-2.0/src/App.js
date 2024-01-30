import React from 'react'
import { v4 } from 'uuid'
import './App.css'
import Heading from './components/Header/Heading'
import TodoForm from './components/Todos/TodoForm'
import TodoActions from './components/Todos/TodoActions'
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
  function handleToggleDone(id) {
    setNotes(
      notes.map((note) => {
        return note.id === id ? { ...note, isDone: !note.isDone } : { ...note }
      }),
    )
  }
  function handleDeleteAllNotes() {
    setNotes([])
  }
  function handleDeleteDoneNotes() {
    setNotes(notes.filter((note) => note.isDone === false))
  }
  return (
    <div className='App'>
      <Heading />
      <TodoForm getInputValue={getInputValue} />
      <TodoActions
        handleDeleteAllNotes={handleDeleteAllNotes}
        handleDeleteDoneNotes={handleDeleteDoneNotes}
      />
      <TodoList
        className='todoList'
        notes={notes}
        handleDeleteNote={handleDeleteNote}
        handleToggleDone={handleToggleDone}
      />
    </div>
  )
}
export default App
