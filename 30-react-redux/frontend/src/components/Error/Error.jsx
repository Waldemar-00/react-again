import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { clearError } from '../../redux/slices/errorSlice'

const Error = () => {
  const dispatch = useDispatch()
  const errorMessage = useSelector((state) => state.error)
  React.useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])
  return <ToastContainer position='top-left' autoClose={4000} />
}

export default Error
