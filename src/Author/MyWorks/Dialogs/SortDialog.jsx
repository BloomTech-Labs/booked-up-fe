import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { setSortedData, clearSortedData } from "../../../actions/sharedAction";
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

function SortDialog(props) {
  const options = [
    "Title: A to Z",
    "Title: Z to A",
    "Author: A to Z",
    "Author: Z to A",
    "Genre: A to Z",
    "Genre: Z to A",
    "Popularity"
  ];

  const [sortClicked, setSortClicked] = useState(props.sortClicked);
  const classes = useStyles();

  console.log(
    "NL: SortFilterGroup.jsx: SortFilterGroup: handleSort: Line 38: sortClicked: ",
    sortClicked
  );

  // const handleSort = () => {
  //   setSortClicked(true);
  // };

  const handleSortClear = value => {
    setSortClicked(false);
    console.log(
      "NL: SortFilterGroup: handleSortClear: Line 48: props.works: ",
      props.works
    );
    console.log(
      "NL: SortFilterGroup: handleSortClear: Line 50: props.sortedData: ",
      props.sortedData
    );

    clearSortedData();
  };

  const handleListItemClick = value => {
    props.handleSortClose(value);
  };

  const handleSortClose = value => {
    setSortClicked(false);

    let localSortedData = [];
    let localFullData = _.cloneDeep(props.works);
    console.log(
      "NL: SortFilterGroup: handleSortClose: Line 65: props.works: ",
      props.works
    );
    console.log(
      "NL: SortFilterGroup: handleSortClose: Line 60: localSortedData: ",
      localSortedData
    );

    if (value !== null) {
      switch (value) {
        case "Title: A to Z": {
          localSortedData = localFullData.sort(function(a, b) {
            if (a.title < b.title) return -1;
            else if (a.title > b.title) return 1;
            return 0;
          });
          break;
        }
        case "Title: Z to A": {
          localSortedData = localFullData.sort(function(a, b) {
            if (a.title < b.title) return 1;
            else if (a.title > b.title) return -1;
            return 0;
          });
          break;
        }
        case "Author: A to Z": {
          localSortedData = localFullData.sort(function(a, b) {
            if (a.author < b.author) return -1;
            else if (a.author > b.author) return 1;
            return 0;
          });
          break;
        }
        case "Author: Z to A": {
          localSortedData = localFullData.sort(function(a, b) {
            if (a.author < b.author) return 1;
            else if (a.author > b.author) return -1;
            return 0;
          });
          break;
        }
        case "Genre: A to Z": {
          localSortedData = localFullData.sort(function(a, b) {
            if (a.genre < b.genre) return -1;
            else if (a.genre > b.genre) return 1;
            return 0;
          });
          break;
        }
        case "Genre: Z to A": {
          localSortedData = localFullData.sort(function(a, b) {
            if (a.genre < b.genre) return 1;
            else if (a.genre > b.genre) return -1;
            return 0;
          });
          break;
        }
        case "Popularity": {
          break;
        }
        default:
          break;
      }
      console.log(
        "NL: SortFilterGroup: handleSortClose: Line 130: props.works: ",
        props.works
      );
      console.log(
        "NL: SortFilterGroup: handleSortClose: Line 118: localSortedData: ",
        localSortedData
      );
      setSortedData(localSortedData);
    }
  };

  return (
    <>
      {sortClicked && (
        <div>
          <Dialog
            onClose={handleSortClose}
            aria-labelledby="sort-dialog-title"
            open={sortClicked}
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
                  onClick={() => handleSortClose(null)}
                >
                  Close
                </Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={() => handleSortClear(null)}
                >
                  Clear
                </Button>
              </div>
            </List>
          </Dialog>
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    works: state.authorContent,
    sortedData: state.sortFilteredData
  };
};

export default connect(mapStateToProps, { setSortedData, clearSortedData })(
  SortDialog
);
