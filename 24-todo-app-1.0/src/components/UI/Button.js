import styles from './Button.module.css'
function Button({ text, className, type }) {
  return (
    <button
      type={type}
      className={styles[className]}
    >
      {text}
    </button>
  )
}
export default Button
