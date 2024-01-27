import styles from './TodoList.module.css'
function TodoList({ className, notes }) {
  return (
    <ul className={styles[className]}>
      {notes.map((note) => (
        <li>{note}</li>
      ))}
    </ul>
  )
}
export default TodoList
