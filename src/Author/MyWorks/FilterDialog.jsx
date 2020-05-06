import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { genre } from "../../genre";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  titleSearch: {},
  authorSearch: {},
  authorResults: {},
  authorAdd: {},
  datePicker: {}
}));

export default function FilterDialog(props) {
  const [selectedStartDate, setSelectedStartDate] = useState(Date.now());
  const [selectedEndDate, setSelectedEndDate] = useState(Date.now());
  const [genreChecked, setGenreChecked] = useState(genre);

  const handleListItemClick = value => {
    props.handleFilterClose(value);
  };

  const handleTitleSearchChange = value => {};
  const handleAuthorSearchChange = value => {};
  const handleStartDateChange = value => {
    setSelectedStartDate(value);
  };
  const handleEndDateChange = value => {
    setSelectedEndDate(value);
  };

  const children = [
    "Nathan Loveless",
    "Christian Auld",
    "Daniel Cruz",
    "Derrek Glen",
    "Shafi Masoumi"
  ];

  const classes = useStyles();

  return (
    <Dialog
      onClose={props.handleFilterClose}
      aria-labelledby="filter-dialog-title"
      open={props.filterClicked}
    >
      <DialogTitle id="sort-dialog-title">Filter Options</DialogTitle>
      <TextField
        id="filled-title-search"
        label="Title Search"
        variant="filled"
        className={classes.titleSearch}
        onChange={handleTitleSearchChange}
      />
      <TextField
        id="filled-author-search"
        label="Author Search"
        variant="filled"
        className={classes.authorSearch}
        onChange={handleAuthorSearchChange}
      />
      <div className={classes.authorResults}></div>
      <div className={classes.authorAdd}>
        <div>
          {children.map(child => (
            <div>{child}</div>
          ))}
        </div>
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyy"
            margin="normal"
            id="date-picker-start-inline"
            label="Start Date"
            value={selectedStartDate}
            className={classes.datePicker}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyy"
            margin="normal"
            id="date-picker-end-inline"
            label="End Date"
            value={selectedEndDate}
            className={classes.datePicker}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </Dialog>
  );
}
