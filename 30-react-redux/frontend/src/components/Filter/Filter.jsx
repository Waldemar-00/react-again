import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import filter from '../../redux/slices/filterSlice'
import './Filter.css'
const Filter = () => {
  const dispatch = useDispatch()
  const title = useSelector((state) => state.filter.title)
  const author = useSelector((state) => state.filter.author)
  const favorite = useSelector((state) => state.filter.favorite)
  const handleResetFiters = () => {
    dispatch(filter.actions.resetFilters())
  }
  return (
    <div className='app-block filter'>
      <div className='filter-row'>
        <div className='filter-group'>
          <input
            type='text'
            placeholder='Filter by title...'
            value={title}
            onChange={(e) => dispatch(filter.actions.setTitleFilter(e.target.value))}
          />
        </div>
        <div className='filter-group'>
          <input
            type='text'
            placeholder='Filter by author...'
            value={author}
            onChange={(e) => dispatch(filter.actions.setAuthorFilter(e.target.value))}
          />
        </div>
        <div className='filter-group'>
          <label>
            <input type='checkbox' checked={favorite} onChange={() => dispatch(filter.actions.setFavoriteFilter())} />
            Favorite
          </label>
        </div>
        <button type='button' onClick={handleResetFiters}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
