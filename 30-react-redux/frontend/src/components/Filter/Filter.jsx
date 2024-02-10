import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import filterSlice from '../../redux/slices/filterSlice'
import './Filter.css'
const Filter = () => {
  const dispatch = useDispatch()
  const title = useSelector((state) => state.filter.title)
  return (
    <div className='app-block filter'>
      <div className='filter-group'>
        <input
          type='text'
          placeholder='Filter by title...'
          value={title}
          onChange={(e) => dispatch(filterSlice.actions.setTitleFilter(e.target.value))}
        />
      </div>
    </div>
  )
}

export default Filter
