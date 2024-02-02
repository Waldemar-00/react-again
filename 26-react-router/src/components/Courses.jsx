import { NavLink, Outlet } from 'react-router-dom'
import { courses } from '../data/courses'
const Courses = () => {
  return (
    <>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => {
          return (
            <li key={course.id}>
              <NavLink to={`/courses/${course.slug}`}>{course.title}</NavLink>
            </li>
          )
        })}
      </ul>
      <Outlet />
    </>
  )
}
export default Courses
