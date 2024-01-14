const DivWithButton = (
  <div className='app'>
    <button
      // id='our-btn'
      onClick={(e) => changeButton(e)}
    >
      Hello JSX!
    </button>
  </div>
)
function changeButton(e) {
  // document.getElementById('our-btn').className = 'btn-green'
  e.target.className = 'btn-green'
  e.target.innerText = 'The text was changed!'
}
ReactDOM.createRoot(document.querySelector('#root')).render(DivWithButton)
