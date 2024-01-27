import styles from './TodoList.module.css'
function TodoList({ className }) {
  return (
    <ul className={styles[className]}>
      <li>Get prodacts form the store</li>
      <li>Meet friends</li>
      <li>Meet friends</li>
      <li>Meet friends</li>
    </ul>
  )
}
export default TodoList
