import { useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import NotFound404 from './NotFound404'

const SingleCourse = () => {
  const { slug } = useParams()
  const foundElement = courses.find((course) => course.slug === slug)
  const content = foundElement ? (
    foundElement.description
  ) : (
    <NotFound404 className='coursesNotfound' text='NOT FOUND COURSE' />
  )
  return (
    <article>
      <div>{content}</div>
    </article>
  )
}

export default SingleCourse
