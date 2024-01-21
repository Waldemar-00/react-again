import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'
function App() {
  return (
    <div className='App'>
      <Counter number={0} />
      <Button added={1} />
      <Button added={2} />
      <Button added={3} />
      <Button added={4} />
      <Button added={5} />
    </div>
  )
}

export default App
