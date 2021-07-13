import React from 'react'

import {Button, Grid, Link, TextField} from "@material-ui/core"
import { useForm, Controller } from 'react-hook-form';

import "./style.css"
import { useHistory } from 'react-router-dom';

const Login = ({handleOnSubmit}) => {
  const {control, handleSubmit, reset} = useForm();
  const history = useHistory()
  const onSubmit = (data) =>{
    handleOnSubmit({
      userEmail: data.userEmail,
      password: data.password
    })
    history.push("/")
  }
  const handleCancel = () => {
    reset()
    history.push("/")
  }


  return (
    <div className="login">
    <div className="login__paper">
      <h2 className="paper__header">Wellcome Games Station</h2>
      <form className="paper__form"
        onSubmit={handleSubmit(onSubmit)}>
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
            render={({ field }) => <TextField type={field.name} id={field.name} fullWidth margin="dense" label="Password" variant="outlined" {...field} />}
          />
        </div>
        <div className="form__button">
          <div className="button__spacing">
            <Button fullWidth type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </div>
          <div className="button__spacing">
            <Button onClick={handleCancel} fullWidth  variant="contained">
              Cancel
            </Button>
          </div>
        </div>
        <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Join GS"}
              </Link>
            </Grid>
          </Grid>
      </form>
    </div>
  </div>
  )
}

export default Login