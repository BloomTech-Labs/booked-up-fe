import React, { useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/adminAction";
import UsersDisplay from "./UsersDisplay";
import { sharedToolbarStyles } from "../SharedComponents/materialUIShared";

export const Users = props => {
  // We need this because the state hasn't changed yet so it will not initiate
  // mapStateToProps until something has changed.  We set the current display list
  // of userAccounts to local state and when we need to do something redux state
  // will overwrite the props.userAccounts
  const [users] = useState(props.userAccounts);
  const classes = sharedToolbarStyles();

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
