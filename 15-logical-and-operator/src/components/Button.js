import './Button.css'
function Button({ text = 'Plus', added = '', onChangeCounter, bgColor = '' }) {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor }}
      onClick={() => onChangeCounter(added)}
    >
      {text} {added}
    </button>
  )
}
export default Button
