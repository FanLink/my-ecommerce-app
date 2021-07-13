import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import "./style.css";
import { useHistory } from "react-router-dom";
const Register = ({handleOnSubmit}) => {
  const { control, handleSubmit, reset  } = useForm();
  const  history = useHistory();
  const onSubmit = data => {
    const values = {
      userName: data.userName,
      userEmail: data.userEmail,
      password: data.password
    }
    handleOnSubmit(values)
    history.push("/")
  }
  const handleCancel = () => {
    reset()
    history.push("/")
  }
  return (
    <div className="register">
      <div className="register__paper">
        <h2 className="paper__header">Join Games Station</h2>
        <form className="paper__form"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="form__spacing">
            <Controller
              name="userName"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField id={field.name} fullWidth margin="dense" label="User Name" variant="outlined" {...field} />}
            />
          </div>
          <div className="form__spacing">
            <Controller
              name="userEmail"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField id={field.name} fullWidth margin="dense" label="User Email" variant="outlined" {...field} />}
            />
          </div>
          <div className="form__spacing">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField type="password" id={field.name} fullWidth margin="dense" label="Password" variant="outlined" {...field} />}
            />
          </div>
          <div className="form__button">
            <div className="button__spacing">
              <Button fullWidth type="submit" variant="contained" color="primary">
                Register
              </Button>
            </div>
            <div className="button__spacing">
              <Button onClick={handleCancel} fullWidth  variant="contained">
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
