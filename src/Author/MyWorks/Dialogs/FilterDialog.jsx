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
  const [filterClicked, setFilterClicked] = useState(props.filterClicked);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState([]);

  const classes = useStyles();

  const handleFilterClear = () => {
    setFilterClicked(false);
    props.clearSortedData();
  };

  const handleFilterClose = () => {
    setFilterClicked(false);
  };

  const handleTitleSearchChange = e => {
    setTitle(e.target.value);
    console.log(
      "NL: FilterDialog.jsx: handleTitleSearchChange: title: ",
      title
    );
  };
  const handleAuthorSearchChange = e => {
    setAuthor(e.target.value);
    console.log(
      "NL: FilterDialog.jsx: handleAuthorSearchChange: author: ",
      author
    );
  };
  const handleStartDateChange = value => {
    setDate(value);
  };
  const handleEndDateChange = e => {
    setDate(e.target.value);
  };
  const handleGenreChange = e => {
    setGenre(e);
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
    const localFilteredData = props.works.filter(work => {
      return work.title.toLowerCase().includes(title.toLowerCase());
    });

    localFilteredData = localFilteredData.filter(work => {
      return work.author.toLowerCase().includes(author.toLowerCase());
    });
    props.applySortedData(authorFilteredData);
  };

  return (
    <Dialog
      onClose={props.handleFilterClose}
      aria-labelledby="filter-dialog-title"
      open={filterClicked}
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
          onClick={() => handleFilterClose(null)}
        >
          Close
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => (handleFilterClose(null), handleFilterSubmit())}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleFilterClear(null)}
        >
          Clear
        </Button>
      </div>
    </Dialog>
  );
}
