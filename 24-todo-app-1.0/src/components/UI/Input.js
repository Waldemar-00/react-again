import styles from './Input.module.css'
function Input({ type, placeholder, className, name, value, handleChangeValue, handleBlur }) {
  return (
    <input
      name={name}
      className={styles[className]}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChangeValue(e.target.value)}
      onBlur={(e) => handleBlur(e.target.value)}
    />
  )
}
export default Input
