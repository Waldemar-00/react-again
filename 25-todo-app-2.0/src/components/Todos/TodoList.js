import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './TodoList.module.css'
function TodoList({ notes, handleDeleteNote }) {
  if (!notes.length) return <h2 className={styles.empty}>Todo list is empty</h2>
  return (
    <ul className={styles.todoList}>
      {notes.map((note) => (
        <li
          key={note.id}
          onDoubleClick={() => handleDeleteNote(note.id)}
        >
          <RiTodoFill className={styles.RiIcon} />
          <div className={styles.text}>{note.text}</div>
          <RiDeleteBin2Line className={styles.Bin} />
          <FaCheck className={styles.Fa} />
        </li>
      ))}
    </ul>
  )
}
export default TodoList
