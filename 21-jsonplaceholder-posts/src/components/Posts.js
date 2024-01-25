import React from 'react'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = React.useState([])
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
  }, [])
  if(error) return <h2 style={{ color: 'red' }}>Error: {error}</h2>
  return (
    <section>
      {(Array.isArray(posts) &&
        posts.map((item) => (
          <Post
            key={item.id}
            {...item}
          />
        )))}
    </section>
  )
}
export default Posts
