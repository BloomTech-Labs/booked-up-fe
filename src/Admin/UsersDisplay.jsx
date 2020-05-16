import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditingButtons from "../Author/MyWorks/EditingButtons";

const useStyles = makeStyles(theme => ({
  grid: {
    display: "flex",
    justifyContent: "center"
  },
  gridItem: {
    border: "1px solid black",
    margin: "10px",
    borderRadius: "5px",
    backgroundColor: "#c3c5ef",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },

  standard: {
    margin: "10px",
    textAlign: "center"
  }
}));

const UsersDisplay = props => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.grid} spacing={2}>
        {props.userAccounts.map(user => (
          <>
            <Grid item xs={12} className={classes.gridItem}>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.first_name}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.last_name}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.display_name}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.email}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.city}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.state}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.country}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.id}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.avatar_url}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.email_verification}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.password_reset}
              </Grid>
              <Grid item xs={6} sm={3} className={classes.standard}>
                {user.created_at}
              </Grid>
              <EditingButtons />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default UsersDisplay;
