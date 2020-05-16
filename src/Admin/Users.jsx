import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getUsers } from "../actions/adminAction";
import UsersDisplay from "./UsersDisplay";
import { setSeconds } from "date-fns/esm";

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    margin: theme.spacing(2, 0),
    marginLeft: "2px",
    marginRight: "2px",
    marginTop: "2px",
    marginBottom: "2px",
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: "10px"
  }
}));

export const Users = props => {
  // We need this because the state hasn't changed yet so it will not initiate
  // mapStateToProps until something has changed.  We set the current display list
  // of userAccounts to local state and when we need to do something redux state
  // will overwrite the props.userAccounts
  const [users, setUserse] = useState(props.userAccounts);
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar}></div>
      <UsersDisplay userAccounts={users} />
    </>
  );
};

const mapStateToProps = state => ({
  userAccounts: state.userAccounts
});

export default connect(mapStateToProps, { getUsers })(Users);
