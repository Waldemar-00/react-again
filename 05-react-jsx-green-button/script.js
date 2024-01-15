const DivWithButton = () => {
  function changeButton(e) {
    e.target.className = 'btn-green'
    e.target.innerText = 'The text was changed!'
  }
  return (
    <div className='app'>
      <button onClick={(e) => changeButton(e)}>Hello JSX!</button>
    </div>
  )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<DivWithButton />)
