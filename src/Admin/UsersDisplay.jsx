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
  let userArray = [];
  props.userAccounts.map(user => {
    userArray = [...userArray, Object.values(user)];
  });

  console.log(userArray);

  return (
    <>
      <Grid container className={classes.grid} spacing={2}>
        {userArray.map(user => (
          <Grid item xs={12} className={classes.gridItem}>
            {user.map(property => (
              <Grid item xs={6} sm={3} className={classes.standard}>
                {property}
              </Grid>
            ))}
            <EditingButtons />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UsersDisplay;
