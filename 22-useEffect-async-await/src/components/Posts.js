import React from 'react'
import Post from './Post'
import { getPosts } from '../utils/getPosts'
const _API_URL = 'https://jsonplaceholder.typicode.com/posts'
function Posts() {
  const [posts, setPosts] = React.useState([])
  const [error, setError] = React.useState('')
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    getPosts({ url: _API_URL, setPosts, setError, setLoading })
  }, [])
  if (isLoading) return <h2 style={{ color: 'lightblue' }}>Loading...</h2>
  if (error) return <h2 style={{ color: 'red' }}>Error: {error}</h2>
  return (
    <>
      <section>
        {Array.isArray(posts) &&
          posts.map((item) => (
            <Post
              key={item.id}
              {...item}
            />
          ))}
      </section>
      <h2>FOOTER</h2>
    </>
  )
}
export default Posts
