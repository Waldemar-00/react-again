import styles from './Input.module.css'
function Input({ type, placeholder, className }) {
  return (
    <input
      className={styles[className]}
      type={type}
      placeholder={placeholder}
    />
  )
}
export default Input
