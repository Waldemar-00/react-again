import styles from './TodoList.module.css'
function TodoList({ className, notes, handleDeleteNote }) {
  return (
    <ul className={styles[className]}>
      {notes.map((note, index) => (
        <li onDoubleClick={() => handleDeleteNote(index)}>{note}</li>
      ))}
    </ul>
  )
}
export default TodoList
