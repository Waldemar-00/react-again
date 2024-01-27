import styles from './Input.module.css'
function Input({ type, placeholder }) {
  return (
    <input
      className={styles.addTodo}
      type={type}
      placeholder={placeholder}
    />
  )
}
export default Input
