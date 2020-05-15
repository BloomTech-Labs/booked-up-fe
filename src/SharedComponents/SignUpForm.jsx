import React from "react";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { createAccount } from "../Actions/authenticationAction";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(2, 0, 2, 0),
    minWidth: "97%"
  },
  selectEmpty: {
    marginTop: theme.spacing(12)
  },
  error: {
    color: "red"
  },
  signIn: {
    display: "flex",
    justifyContent: "flex-center"
  }
}));

const SignUpForm = props => {
  const classes = useStyles();
  const { register, errors, handleSubmit, control } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    props.createAccount(
      {
        user_type: data.userType,
        first_name: data.firstName,
        last_name: data.lastName,
        display_name: data.username,
        email: data.email,
        password: data.password
      },
      props
    );
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.side} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper} component="main">
            <Avatar className={classes.avatar}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid item xs={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    User Type
                  </InputLabel>
                  <Controller
                    as={
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="User type"
                        color="secondary"
                      >
                        <MenuItem value={"agent"}>Agent</MenuItem>
                        <MenuItem value={"author"}>Author</MenuItem>
                        <MenuItem value={"fan"}>Fan</MenuItem>
                      </Select>
                    }
                    name="userType"
                    rules={{ required: "You must select a user type" }}
                    control={control}
                    defaultValue=""
                  />
                  {errors.userType && (
                    <div className={classes.error}>
                      {errors.userType.message}
                    </div>
                  )}
                </FormControl>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="text"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    color="secondary"
                    htmlFor="firstName"
                    autoComplete="fname"
                    inputRef={register({
                      required: "First name is required",
                      message: "First name is required"
                    })}
                    autoFocus
                  />
                  {errors.firstName && (
                    <div className={classes.error}>
                      {errors.firstName.message}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="text"
                    name="lastName"
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    color="secondary"
                    htmlFor="lastName"
                    autoComplete="lname"
                    inputRef={register({
                      required: "Last name is required",
                      message: "Last name is required"
                    })}
                  />
                  {errors.lastName && (
                    <div className={classes.error}>
                      {errors.lastName.message}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    color="secondary"
                    htmlFor="username"
                    autoComplete="username"
                    inputRef={register({
                      required: "Username is required",
                      message: "Username is required"
                    })}
                  />
                  {errors.username && (
                    <div className={classes.error}>
                      {errors.username.message}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    color="secondary"
                    htmlFor="email"
                    autoComplete="email"
                    inputRef={register({
                      required: "You must provide an Email",
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Please provide a valid Email!"
                      }
                    })}
                  />
                  {errors.email && (
                    <div className={classes.error}>{errors.email.message}</div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="password"
                    variant="outlined"
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
                    <div className={classes.error}>
                      {errors.password.message}
                    </div>
                  )}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container className={classes.signIn}>
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { createAccount })(SignUpForm);
