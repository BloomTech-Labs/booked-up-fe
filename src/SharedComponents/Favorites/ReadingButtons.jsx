import React from "react";
//material ui imports
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import Tooltip from "@material-ui/core/Tooltip";
//redux and action imports
import { setWork, taskStart } from "../../actions/authorAction";
import { connect } from "react-redux";
import { removeContent } from "../../actions/fanAction";

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
    marginRight: "7%",
    marginLeft: "7%",
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

function ReadingButtons(props) {
  const handleClick = () => {
      props.setWork(props.work)
      window.location.replace(`/dashboard/book`)
    };
  
  
  const classes = useStyles();
  return (
    /*You can open the book which directs to workview component,  or remove book from favorites which opens the removemodal */
    <>
    <ButtonGroup className={classes.buttonGroup}>
      <Tooltip title="Open Book" onClick={handleClick}>
        <IconButton className={classes.button}>
          <ImportContactsOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
          title="Remove Book"
          onClick={() => (props.setWork(props.work), props.handleRemOpen())}
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

export default connect(mapStateToProps, { setWork, removeContent, taskStart })(ReadingButtons);
