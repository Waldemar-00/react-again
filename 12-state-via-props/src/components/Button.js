import './Button.css'
function Button(props) {
  return (
    <button
      type='button'
      onClick={() => props.onChangeCounter(props.added)}
    >{`Plus ${props.added}`}</button>
  )
}
export default Button
