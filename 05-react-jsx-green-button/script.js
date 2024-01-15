const DivWithButton = ({ textBtn: startText, classBtnGreen, newTextBtn }) => {
  const [textBtn, setTextBtn] = React.useState(startText)
  const [classGreenBtn, setGreenBtn] = React.useState('')
  function changeButton() {
    setGreenBtn(classBtnGreen)
    setTextBtn(newTextBtn)
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
