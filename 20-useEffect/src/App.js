import './App.css'
import React from 'react'
function App() {
  const [todo, setTodo] = React.useState(null)
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then((response) => response.json())
      .then((json) => setTodo(json))
  }, [])
  return <div className='App'>{todo && <h2>{todo.title}</h2>}</div>
}

export default App
