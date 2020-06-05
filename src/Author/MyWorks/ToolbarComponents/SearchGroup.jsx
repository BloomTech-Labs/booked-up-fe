import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  searchGroup: {
    display: "flex",
    alignItems: "center",
    textAlign: "middle",
    marginLeft: "100px"
  },
  searchBar: {
    marginLeft: "10px",
    marginBottom: "5px"
  }
}));

const SearchGroup = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchGroup}>
      <SearchOutlinedIcon />
      <TextField
        id="search"
        className={classes.searchBar}
        label="Search"
        data-testid="work-search"
      />
    </div>
  );
};

export default SearchGroup;
