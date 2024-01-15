const DivWithButton = () => {
  const [textBtn, setTextBtn] = React.useState('Hello JSX!')
  function changeButton(e) {
    e.target.className = 'btn-green'
    setTextBtn('The text was changed!')
  }
  return (
    <div className='app'>
      <button onClick={(e) => changeButton(e)}>{textBtn}</button>
    </div>
  )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<DivWithButton />)
