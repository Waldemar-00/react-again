import { useContext } from 'react'
import UserContext from '../context/UserContext'

const UserInfo = () => {
  const context = useContext(UserContext)
  return <h2>{context.userName}</h2>
  // return <UserContext.Consumer>{(value) => <h2>{value}</h2>}</UserContext.Consumer>
}

export default UserInfo
