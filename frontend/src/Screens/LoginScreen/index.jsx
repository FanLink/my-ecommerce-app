import React from 'react'
import Login from '../../components/Login';
import {useDispatch} from "react-redux"
import "./style.css"
const LoginScreen = () => {
  const dispatch = useDispatch();
  const onClickHandler = (accountInfo) => {
    // dispatch(createUser(accountInfo))
  }
  return (
    <div className ="login">
      <Login onClickHandler = {onClickHandler} />
    </div>
  )
}

export default LoginScreen
