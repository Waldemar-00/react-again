import { RiDeleteBin2Line } from 'react-icons/ri'
import { FiRefreshCw } from 'react-icons/fi'
import styles from './TodoActions.module.css'
function TodoActions() {
  return (
    <div className={styles.buttonsBlock}>
      <button
        type='button'
        className={styles.btnAction}
      >
        <FiRefreshCw className={styles.FiRefreshCw}></FiRefreshCw>
      </button>
      <button
        type='button'
        className={styles.btnAction}
      >
        <RiDeleteBin2Line className={styles.RiDeleteBin2Line} />
      </button>
    </div>
  )
}
export default TodoActions
