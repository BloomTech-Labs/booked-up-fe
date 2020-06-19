import React, { useState } from "react";
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

const SearchGroup = props => {
  const [text, setText] = useState("search here");
  const classes = useStyles();

  const handleSearch = e => {
    setText(e.target.value);
    let searchData = props.works.filter(search => {
      if (search !== "") {
        return (
          search.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          search.description
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
      } else {
        return;
      }
    });

    if (e.target.value != "") {
      props.applySortedData(searchData);
    } else {
      props.clearSortedData();
    }
  };

  return (
    <div className={classes.searchGroup}>
      <SearchOutlinedIcon />
      <TextField
        id="search"
        className={classes.searchBar}
        label="Search"
        data-testid="work-search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchGroup;
