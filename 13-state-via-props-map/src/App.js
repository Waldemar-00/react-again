import React from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'

function App() {
  let [counterValue, setCounterValue] = React.useState(0)
  function onChangeCounter(number) {
    setCounterValue((counterValue += number))
  }
  function onResetCounter() {
    setCounterValue(0)
  }
  return (
    <div className='App'>
      <Counter number={counterValue} />
      <Button
        added={1}
        onChangeCounter={onChangeCounter}
      />
      <Button
        added={2}
        onChangeCounter={onChangeCounter}
      />
      <Button
        added={3}
        onChangeCounter={onChangeCounter}
      />
      <Button
        added={4}
        onChangeCounter={onChangeCounter}
      />
      <Button
        added={5}
        onChangeCounter={onChangeCounter}
      />
      <div>
        <Button
          text='Reset'
          onChangeCounter={onResetCounter}
        />
      </div>
    </div>
  )
}

export default App
