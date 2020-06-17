import React, { useState } from "react";
import TitleSearch from "./FilterDialogComponents/TitleSearch";
import AuthorSearch from "./FilterDialogComponents/AuthorSearch";
import DateRange from "./FilterDialogComponents/DateRange";
import Genre from "./FilterDialogComponents/Genre";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    paddng: "10px"
  },
  button: {
    textAlign: "center",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white"
    }
  }
}));

export default function FilterDialog(props) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState([]);

  const classes = useStyles();
  const handleTitleSearchChange = e => {
    setTitle(e.target.value);
  };
  const handleAuthorSearchChange = e => {
    setAuthor(e.target.value);
  };
  const handleStartDateChange = value => {
    setDate(value);
    console.log("NL: FilterDialog.jsx: handleStartDateChange: title: ", date);
    console.log("Inside handleStartDateChange");
  };
  const handleEndDateChange = e => {
    setDate(e.target.value);
    console.log("NL: FilterDialog.jsx: handleEndDateChange: title: ", date);
  };
  const handleGenreChange = e => {
    setGenre(e);
    console.log("NL: FilterDialog.jsx: handleGenreChange: title: ", genre);
    console.log("Inside handleGenreChange");
  };

  const handleFilterSubmit = () => {
    // props.works.filter(work => {
    //   if (filter === "all") {
    //     return (
    //       work.title.toLowerCase().includes(value.toLowerCase()) ||
    //       work.description.toLowerCase().includes(value.toLowerCase()) ||
    //       /*work.genre.toLowerCase().includes(value.toLowerCase()) ||*/
    //       work.author.toLowerCase().includes(value.toLowerCase())
    //     );
    //   } else {
    //     return work[`${filter}`].toLowerCase().includes(value.toLowerCase());
    //   }
    // })
    const sortedData = props.works.filter(work => {
      return work.title.toLowerCase().includes(title.toLowerCase());
    });
    console.log("NL: FilterDialog.jsx: handleFilterSubmit: work: ", sortedData);
    props.applySortedData(sortedData);
  };

  return (
    <Dialog
      onClose={props.handleFilterClose}
      aria-labelledby="filter-dialog-title"
      open={props.filterClicked}
    >
      <DialogTitle id="sort-dialog-title">Filter Options</DialogTitle>
      <TitleSearch handleTitleSearchChange={handleTitleSearchChange} />
      <AuthorSearch handleAuthorSearchChange={handleAuthorSearchChange} />
      <DateRange
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
      />
      <Genre handleGenreChange={handleGenreChange} />
      <div className={classes.buttonGroup}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => props.handleFilterClose(null)}
        >
          Close
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => (props.handleFilterClose(null), handleFilterSubmit())}
        >
          Submit
        </Button>
      </div>
    </Dialog>
  );
}
