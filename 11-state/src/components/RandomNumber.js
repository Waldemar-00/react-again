import React from 'react'
import { getRandomRoundNumber } from '../utils/getRandomNumber'
import './RandomNumber.css'
const RandomNumber = () => {
  const [number, setNumber] = React.useState(getRandomRoundNumber(1000))
  function onChangeNumber() {
    setNumber(() => getRandomRoundNumber(1000))
  }
  return (
    <>
      <h1>{number}</h1>
      <button
        type='button'
        onClick={onChangeNumber}
      >
        Generate new random number
      </button>
    </>
  )
}
export default RandomNumber
