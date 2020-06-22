import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  authorSearch: {},
  authorResults: {},
  authorAdd: {}
}));

export default function TitleSearch(props) {
  const classes = useStyles();

  return (
    <>
      <TextField
        id="filled-author-search"
        label="Author Search"
        variant="filled"
        className={classes.authorSearch}
        onChange={props.handleAuthorSearchChange}
      />
      <div className={classes.authorResults}></div>
      <div className={classes.authorAdd}></div>
    </>
  );
}
