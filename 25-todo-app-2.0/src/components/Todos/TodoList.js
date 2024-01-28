import { RiTodoFill } from 'react-icons/ri'
import styles from './TodoList.module.css'
function TodoList({ notes, handleDeleteNote }) {
  if (!notes.length) return <h2 className={styles.empty}>Todo list is empty</h2>
  return (
    <ul className={styles.todoList}>
      {notes.map((note, index) => (
        <li
          key={index}
          onDoubleClick={() => handleDeleteNote(index)}
        >
          <RiTodoFill className={styles.riIcon} />
          {note}
        </li>
      ))}
    </ul>
  )
}
export default TodoList
