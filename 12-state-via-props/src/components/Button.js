import './Button.css'
function Button({ text = 'Plus', added = '', onChangeCounter }) {
  return (
    <button
      type='button'
      onClick={() => onChangeCounter(added)}
    >{`${text} ${added}`}</button>
  )
}
export default Button
