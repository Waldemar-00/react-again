import React from 'react'
import Post from './Post'
const _API_URL = 'https://jsonplaceholder.typicode.com/posts'
function Posts() {
  const [posts, setPosts] = React.useState([])
  const [error, setError] = React.useState('')
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function getPosts(url) {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setPosts(json)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getPosts(_API_URL)
    // fetch(_API_URL)
    //   .then((response) => response.json())
    //   .then((json) => setPosts(json))
    //   .catch((error) => setError(error.message))
    //   .finally(() => setLoading(false))
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
