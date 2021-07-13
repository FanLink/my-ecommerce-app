import React from 'react'
import Login from '../../components/Login';
import { useDispatch } from "react-redux"
import "./style.css"
import { userLogin } from '../../redux/tokenSlice';
const LoginScreen = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(userLogin(values))
  }
  return (
    <div className="login">
      <Login handleOnSubmit={onSubmit} />
    </div>
  )
}

export default LoginScreen
