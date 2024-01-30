import styles from './Button.module.css'
function Button({ children, className, type }) {
  return (
    <button
      type={type}
      className={styles[className]}
    >
      {children}
    </button>
  )
}
export default Button
