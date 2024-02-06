const getCurrentTime = () => {
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  // return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${
  //   seconds < 10 ? '0' + seconds : seconds
  // }`
  return `${hours} : ${minutes} : ${seconds}`
}

export default getCurrentTime
