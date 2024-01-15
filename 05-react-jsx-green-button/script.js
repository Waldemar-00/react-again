const DivWithButton = () => {
  const [textBtn, setTextBtn] = React.useState('Hello JSX!')
  const [classGreenBtn, setGreenBtn] = React.useState('')
  function changeButton() {
    setGreenBtn('btn-green')
    setTextBtn('The text was changed!')
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

ReactDOM.createRoot(document.querySelector('#root')).render(<DivWithButton />)
