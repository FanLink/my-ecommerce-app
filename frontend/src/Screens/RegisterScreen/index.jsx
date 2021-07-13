import React from 'react'
import { useDispatch } from 'react-redux'
import Register from '../../components/Register'
import { userRegiter } from '../../redux/tokenSlice';
const RegisterScreen = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(userRegiter(values))
  }
  return (
    <div className="registerscreen">
      <Register handleOnSubmit = {handleSubmit}/>
    </div>
  )
}

export default RegisterScreen
