import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    border: "2px solid rgb(88, 228, 39)",
    // marginTop: theme.spacing(18), 
    padding: theme.spacing(3),
    backgroundColor : "#171717"
  },
  header: {
    color: "rgb(88, 228, 39)"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgb(88, 228, 39)",
    color: "#171717"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(4),
    color: "rgb(88, 228, 39)",
    backgroundColor: "#f4f4f4",
    padding: theme.spacing(4),
    borderRadius:"10px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#171717",
    border: "2px solid rgb(88, 228, 39)",
  }
}));

export default function Login({ onClickHandler }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    const acoutInfo = {
      email: email,
      password: password
    }
    onClickHandler(acoutInfo)
  }

  return (
    <Container component="main"  maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <h2 className={classes.header}>Wellcome Games Station!</h2>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.header}>
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="GS Acount Name"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            className={classes.submit}
            onClick={submitHandler}
          >
           <strong className={classes.header}>Sign In</strong> 
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Join GS"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}