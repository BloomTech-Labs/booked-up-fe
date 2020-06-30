import React from "react";
//material ui imports
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import Tooltip from "@material-ui/core/Tooltip";
//redux and action imports
import { setWork, delContent } from "../../actions/authorAction";
import { connect } from "react-redux";

//component styles
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
    props.setWork(props.work);
    window.location.replace(`/dashboard/book`);
  };
  const classes = useStyles();
  return (
    /*You can open the book which directs to workview component, edit properties which opens the editmodal, or delete book which opens the deleteworkmodal */
    <>
      <ButtonGroup className={classes.buttonGroup}>
        <Tooltip title="Open Book" onClick={handleClick}>
          <IconButton className={classes.button}>
            <ImportContactsOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit Properties" onClick={() => (props.setWork(props.work), props.handleEditOpen())}>
          <IconButton className={classes.button}>
            <EditOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Delete Book"
          onClick={() => (props.setWork(props.work), props.handleDelOpen())}
        >
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

export default connect(mapStateToProps, { setWork, delContent })(
  EditingButtons
);
