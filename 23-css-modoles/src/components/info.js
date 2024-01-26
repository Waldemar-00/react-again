import './Info.css'
import styles from './Info.module.css'
// {
//   "info": "Info_info__anGgR",
//   "btnInfo": "Info_btnInfo__fS785",
//   "h2": "Info_h2__QJYx0"
// }
console.log(styles)
function Info() {
  return (
    <div className={styles.info}>
      <h2 className={styles.h2}>This is the Info component</h2>
      <h3>For exapmple</h3>
      <button className={styles.btnInfo}>Click the Info!</button>
    </div>
  )
}
export default Info
