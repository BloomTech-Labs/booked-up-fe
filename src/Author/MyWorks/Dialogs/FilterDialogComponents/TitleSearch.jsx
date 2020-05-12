import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  titleSearch: {}
}));

export default function TitleSearch(props) {
  const classes = useStyles();

  return (
    <TextField
      id="filled-title-search"
      label="Title Search"
      variant="filled"
      className={classes.titleSearch}
      onChange={props.handleTitleSearchChange}
    />
  );
}
