import React, { useState } from "react";
import TitleSearch from "./FilterDialogComponents/TitleSearch";
import AuthorSearch from "./FilterDialogComponents/AuthorSearch";
import DateRange from "./FilterDialogComponents/DateRange";
import Genre from "./FilterDialogComponents/Genre";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({}));

export default function FilterDialog(props) {
  const handleListItemClick = value => {
    props.handleFilterClose(value);
  };

  const handleTitleSearchChange = value => {};
  const handleAuthorSearchChange = value => {};

  const classes = useStyles();

  return (
    <Dialog
      onClose={props.handleFilterClose}
      aria-labelledby="filter-dialog-title"
      open={props.filterClicked}
    >
      <DialogTitle id="sort-dialog-title">Filter Options</DialogTitle>
      <TitleSearch handleTitleSearchChange={handleTitleSearchChange} />
      <AuthorSearch handleAuthorSearchChange={handleAuthorSearchChange} />
      <DateRange />
      <Genre />
    </Dialog>
  );
}
