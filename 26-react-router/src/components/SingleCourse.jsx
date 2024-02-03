import { useNavigate, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
// import NotFound404 from './NotFound404'
import { useEffect } from 'react'

const SingleCourse = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const foundElement = courses.find((course) => course.slug === slug)
  // const content = foundElement ? foundElement.description : null
  useEffect(() => {
    if (!foundElement) navigate('../../not-found', { relative: 'route' }) // or '/courses'
  }, [foundElement, navigate])
  // const content = foundElement ? (
  //   foundElement.description
  // ) : (
  //   <NotFound404 className='coursesNotfound' text='NOT FOUND COURSE' />
  // )
  return (
    <article>
      <div>{foundElement?.description}</div>
    </article>
  )
}

export default SingleCourse
