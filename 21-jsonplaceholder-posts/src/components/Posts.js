import React from 'react'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = React.useState(null)
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
  }, [])
  return (
    <section>
      {posts &&
        posts.map((post) => {
          return (
            <Post
              title={post.title}
              body={post.body}
            />
          )
        })}
    </section>
  )
}
export default Posts
