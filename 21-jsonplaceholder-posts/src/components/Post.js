import './Post.css'
function Post({ userId, title, body }) {
  return (
    <div className='post'>
      <h3>{userId}</h3>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{body}</p>
    </div>
  )
}
export default Post
