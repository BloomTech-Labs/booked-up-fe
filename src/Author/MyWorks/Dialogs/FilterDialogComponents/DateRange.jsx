import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  datePicker: {}
}));

export default function DateRange(props) {
  const [selectedStartDate, setSelectedStartDate] = useState(Date.now());
  const [selectedEndDate, setSelectedEndDate] = useState(Date.now());

  const handleStartDateChange = value => {
    setSelectedStartDate(value);
  };
  const handleEndDateChange = value => {
    setSelectedEndDate(value);
  };

  const classes = useStyles();

  return (
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
  );
}
