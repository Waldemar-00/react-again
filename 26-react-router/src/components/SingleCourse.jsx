import { useParams } from 'react-router-dom'
import { courses } from '../data/courses'

const SingleCourse = () => {
  const { slug } = useParams()
  return (
    <article>
      <div>{courses.filter((course) => course.slug === slug)[0].description}</div>
    </article>
  )
}

export default SingleCourse
