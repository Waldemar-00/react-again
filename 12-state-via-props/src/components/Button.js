import './Button.css'
function Button(props) {
  function onChangeCounter() {}
  return (
    <button
      type='button'
      onClick={onChangeCounter}
    >{`Plus ${props.added}`}</button>
  )
}
export default Button
