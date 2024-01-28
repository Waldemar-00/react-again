import styles from './TodoList.module.css'
function TodoList({ notes, handleDeleteNote }) {
  return (
    <ul className={styles.todoList}>
      {notes.map((note, index) => (
        <li
          key={index}
          onDoubleClick={() => handleDeleteNote(index)}
        >
          {note}
        </li>
      ))}
    </ul>
  )
}
export default TodoList
