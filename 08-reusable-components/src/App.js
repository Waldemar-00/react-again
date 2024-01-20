import './App.css'

function MyComponent() {
  return (
    <div>
      <h1>Hello from the reusable component</h1>
      <button type='button'>Like me</button>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </div>
  )
}

export default App
