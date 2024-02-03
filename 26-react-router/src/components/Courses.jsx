import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { courses } from '../data/courses'
import { useEffect, useState } from 'react'

const SORT_KEYS = ['id', 'slug', 'title']
function sortCourses(courses, key) {
  if (!SORT_KEYS.includes(key)) return courses
  return courses.toSorted((a, b) => (a[key] < b[key] ? -1 : 1))
}
const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))
  const navigate = useNavigate()
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedCourses([...courses])
    }
  }, [navigate, sortKey])
  return (
    <>
      <h2>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h2>
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
