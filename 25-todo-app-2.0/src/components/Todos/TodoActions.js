import { RiDeleteBin2Line } from 'react-icons/ri'
import { RiRefreshLine } from 'react-icons/ri'
import styles from './TodoActions.module.css'
function TodoActions({ handleDeleteAllNotes, handleDeleteDoneNotes, disabledButton }) {
  return (
    <div className={styles.buttonsBlock}>
      <button
        type='button'
        className={styles.btnAction}
        onDoubleClick={handleDeleteAllNotes}
        title='clear all todos'
      >
        <RiRefreshLine className={styles.RiRefreshLine}></RiRefreshLine>
      </button>
      <button
        type='button'
        className={!disabledButton ? styles.btnDisabled : styles.btnAction}
        title='clear done todos'
      >
        <RiDeleteBin2Line
          className={styles.RiDeleteBin2Line}
          onDoubleClick={!disabledButton ? null : handleDeleteDoneNotes}
        />
      </button>
    </div>
  )
}
export default TodoActions
