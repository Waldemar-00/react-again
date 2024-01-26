import './Post.css'
function Post({ id, userId, title, body }) {
  return (
    <div className='post'>
      <h5>post: {id}</h5>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>User_ID: {userId}</h3>
    </div>
  )
}
export default Post
