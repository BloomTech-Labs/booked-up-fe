import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import WorkView from "./WorkView/WorkView.jsx";
import Modal from '@material-ui/core/Modal';
import Popper from '@material-ui/core/Popper';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { setWork } from "../../actions/authorAction";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    border: `2px solid ${theme.palette.secondary.light}`,
    background: `${theme.palette.primary.light}`,
    marginTop: "10px",
    borderRadius: "10px"
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

function EditingButtons(props) {
 
  const handleClick = () => {
      props.setWork(props.work)
      window.location.replace(`/dashboard/book`)
    };
  const classes = useStyles();
  return (
    <>
    <ButtonGroup className={classes.buttonGroup}>
      <Tooltip title="Open Book" component={Link} onClick={handleClick}>
        <IconButton className={classes.button}>
          <ImportContactsOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit Properties">
        <IconButton className={classes.button}>
          <EditOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete Book">
        <IconButton className={classes.button}>
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </Tooltip>
    </ButtonGroup>
  </>
  );
}


const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    currentWork: state.currentWork
  };
};

export default connect(mapStateToProps, { setWork })(EditingButtons);
