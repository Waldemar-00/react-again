import './App.css'
import Info from './components/info'
function App() {
  return (
    <div className='App'>
      {/* for example: div with className from CSS module Info - not work the css styles! */}
      <div className='info'>
        <h1>This is the App component</h1>
        <h3>For example</h3>
        <button className='btn-Info'>Click the App!</button>
      </div>
      <Info />
    </div>
  )
}

export default App
