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
  },
  button: {
    backgroundColor: theme.palette.secondary.light,
    border: "none"
  }
}));

const SearchGroup = (props) => {
  const classes = useStyles();

  return (
    <div >
      <form onSubmit={props.handleSubmit} className={classes.searchGroup}>
        <button type="submit" className={classes.button} onClick={props.handleSubmit}><SearchOutlinedIcon /></button>
      
      <TextField
        id="search"
        className={classes.searchBar}
        label="Search"
        type="search"
        value={props.value}
        data-testid="work-search"
        onChange={props.handleSearch}
      />
      </form>
    </div>
  );
};

export default SearchGroup;
