import UserContext from '../context/UserContext'
const UserInfo = () => {
  return <UserContext.Consumer>{(value) => <h2>{value}</h2>}</UserContext.Consumer>
}

export default UserInfo
