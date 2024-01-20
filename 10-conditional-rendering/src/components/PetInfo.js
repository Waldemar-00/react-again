function PetInfo({ animal, age, isHasAnimal }) {
  const content = isHasAnimal
    ? `My ${animal} is ${age} years old`
    : "I don't have any animal!"
  return isHasAnimal ? <h1>{content}</h1> : <h2>{content}</h2>
}

export default PetInfo
