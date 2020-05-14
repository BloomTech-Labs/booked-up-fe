import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getUsers } from "../actions/adminAction";

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

useEffect(() => {
    props.getUsers();
}

export const Users = props => {
  const classes = useStyles();
  return <div className={classes.toolbar}></div>;
};

const mapStateToProps = state => ({
    user: state.user,
  });
  
export default connect(mapStateToProps, { getUsers })(Users);
