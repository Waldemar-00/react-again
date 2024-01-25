import React from 'react'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = React.useState(null)
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error))
  }, [])
  return (
    <section>
      {Array.isArray(posts) &&
        posts.map((item) => {
          return (
            <Post
              key={item.id}
              {...item}
            />
          )
        })}
    </section>
  )
}
export default Posts
