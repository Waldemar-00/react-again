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
  const textArray = ['Plus 1', 'Plus 2', 'Plus 3', 'Plus 4', 'Plus 5']
  return (
    <div className='App'>
      <Counter number={counterValue} />
      {textArray.map((text, index) => {
        return (
          <Button
            key={index}
            text={text}
            added={index + 1}
            onChangeCounter={onChangeCounter}
          />
        )
      })}
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
