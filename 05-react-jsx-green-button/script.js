const DivWithButton = (props) => {
  const [textBtn, setTextBtn] = React.useState(props.textBtn)
  const [classGreenBtn, setGreenBtn] = React.useState('')
  function changeButton() {
    setGreenBtn(props.classBtnGreen)
    setTextBtn(props.newTextBtn)
  }
  return (
    <div className='app'>
      <button
        type='button'
        className={classGreenBtn}
        onClick={changeButton}
      >
        {textBtn}
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  <DivWithButton
    textBtn='Hello JSX!'
    classBtnGreen='btn-green'
    newTextBtn='The text was changed!'
  />,
)
