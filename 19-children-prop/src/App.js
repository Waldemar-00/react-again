import './App.css'
import Wrapper from './components/Wrapper'
function App() {
  return (
    <div className='App'>
      <h1>Have a good day says Wrapper.</h1>
      <Wrapper color='lightgreen'>
        <h2>Inside of the Wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color='#59f7f7'>
        <h2>Another text</h2>
        <p>Lorem Ipsum</p>
        <input
          type='text'
          placeholder='Enter new description'
        />
      </Wrapper>
    </div>
  )
}

export default App
