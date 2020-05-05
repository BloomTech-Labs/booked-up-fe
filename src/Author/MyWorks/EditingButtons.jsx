import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";

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

export default function EditingButtons(props) {
  const classes = useStyles();
  return (
    <ButtonGroup className={classes.buttonGroup}>
      <IconButton className={classes.button}>
        <ImportContactsOutlinedIcon />
      </IconButton>
      <IconButton className={classes.button}>
        <EditOutlinedIcon />
      </IconButton>
      <IconButton className={classes.button}>
        <DeleteForeverOutlinedIcon />
      </IconButton>
    </ButtonGroup>
  );
}
