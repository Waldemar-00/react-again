import { useNavigate, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import { useEffect } from 'react'

const SingleCourse = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const foundElement = courses.find((course) => course.slug === slug)
  useEffect(() => {
    if (!foundElement) navigate('..', { relative: 'path' })
  }, [foundElement, navigate])
  return (
    <article>
      <div>{foundElement?.description}</div>
    </article>
  )
}

export default SingleCourse
