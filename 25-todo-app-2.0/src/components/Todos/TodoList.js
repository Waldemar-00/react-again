import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './TodoList.module.css'
function TodoList({ notes, handleDeleteNote, handleToggleDone }) {
  return (
    <ul className={styles.todoList}>
      {notes.map((note) => (
        <li
          className={note.isDone ? styles.done : ''}
          key={note.id}
        >
          <RiTodoFill className={styles.RiTodoFill} />
          <div className={styles.text}>{note.text}</div>
          <RiDeleteBin2Line
            className={styles.RiDeleteBin2Line}
            onDoubleClick={() => handleDeleteNote(note.id)}
            title='delete one todo'
          />
          <FaCheck
            className={styles.FaCheck}
            onClick={() => handleToggleDone(note.id)}
            title='toggle todo done'
          />
        </li>
      ))}
    </ul>
  )
}
export default TodoList
