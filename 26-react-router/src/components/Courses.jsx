import { NavLink, Outlet, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { courses } from '../data/courses'
import { useState } from 'react'

function sortCourses(courses, key) {
  return courses.toSorted((a, b) => (a[key] < b[key] ? -1 : 1))
}
const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))
  return (
    <>
      <h2>Courses</h2>
      <ul>
        {sortedCourses.map((course) => {
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
