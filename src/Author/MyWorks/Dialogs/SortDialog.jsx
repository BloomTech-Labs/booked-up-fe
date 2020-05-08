import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    textAlign: "center",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white"
    }
  }
}));

export default function SortDialog(props) {
  const options = [
    "Title: A to Z",
    "Title: Z to A",
    "Author: A to Z",
    "Author: Z to A",
    "Genre: A to Z",
    "Genre: Z to A",
    "Popularity"
  ];

  const handleListItemClick = value => {
    props.handleSortClose(value);
  };

  const classes = useStyles();

  return (
    <Dialog
      onClose={props.handleSortClosed}
      aria-labelledby="sort-dialog-title"
      open={props.sortClicked}
    >
      <DialogTitle id="sort-dialog-title">Sort Options</DialogTitle>
      <List>
        {options.map(option => (
          <ListItem button onClick={() => handleListItemClick(option)}>
            <ListItemText primary={option} />
          </ListItem>
        ))}
        <div className={classes.buttonGroup}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => props.handleSortClose(null)}
          >
            Close
          </Button>
        </div>
      </List>
    </Dialog>
  );
}
