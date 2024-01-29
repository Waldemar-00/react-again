import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './TodoList.module.css'
function TodoList({ notes, handleDeleteNote }) {
  if (!notes.length) return <h2 className={styles.empty}>Todo list is empty</h2>
  return (
    <ul className={styles.todoList}>
      {notes.map((note) => (
        <li
          className=''
          key={note.id}
        >
          <RiTodoFill className={styles.RiTodoFill} />
          <div className={styles.text}>{note.text}</div>
          <RiDeleteBin2Line
            className={styles.RiDeleteBin2Line}
            onDoubleClick={() => handleDeleteNote(note.id)}
          />
          <FaCheck className={styles.FaCheck} />
        </li>
      ))}
    </ul>
  )
}
export default TodoList
