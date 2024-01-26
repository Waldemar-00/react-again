export async function getPosts({ url, setPosts, setError, setLoading }) {
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
