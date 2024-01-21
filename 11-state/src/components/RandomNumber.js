import React from 'react'
import { getRandomRoundNumber } from '../utils/getRandomNumber'
import './RandomNumber.css'
const RandomNumber = (props) => {
  const [number, setNumber] = React.useState(getRandomRoundNumber(props.maxNumber))
  function onChangeNumber() {
    setNumber(() => getRandomRoundNumber(props.maxNumber))
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
