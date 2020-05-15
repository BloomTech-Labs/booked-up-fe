import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { userLogon } from "../Actions/authenticationAction";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    height: "90vh"
  },
  side: {
    backgroundColor: "GhostWhite",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  error: {
    color: "red"
  }
}));

export const LoginForm = props => {
  const classes = useStyles();
const { register, errors, handleSubmit, /*control*/ } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    props.userLogon(
      {
        email: data.username,
        password: data.password
      },
      props
    );
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.side} />
      <Grid item xs={12} sm={8} mdn={5} component={Paper} elevation={6} square>
        <div boxShadow={5} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              type="text"
              name="username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              color="secondary"
              htmlFor="username"
              autoComplete="username"
              autoFocus
              inputRef={register({
                required: "Username is required",
                message: "Username is required"
              })}
            />
            {errors.username && (
              <div className={classes.error}>{errors.username.message}</div>
            )}
            <TextField
              type="password"
              name="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              color="secondary"
              htmlFor="password"
              autoComplete="current-password"
              inputRef={register({
                required: "You must provide a password",
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "Your password must contain Must contain 8 characters - one uppercase, one lowercase, one number, one special"
                }
              })}
            />
            {errors.password && (
              <div className={classes.error}>{errors.password.message}</div>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container color="red">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  message: state.message
});

export default connect(mapStateToProps, { userLogon })(LoginForm);
