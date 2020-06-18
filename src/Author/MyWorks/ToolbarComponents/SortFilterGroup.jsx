import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SortOutlinedIcon from "@material-ui/icons/SortOutlined";
import SortDialog from "../Dialogs/SortDialog";
import FilterDialog from "../Dialogs/FilterDialog";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";

const useStyles = makeStyles(theme => ({
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

const SortFilterGroup = props => {
  /* NOTE: The Component that renders the content area (the works)
  must pass the following in it:
    const applySortedData = data => {
    setWorks(data);
  };
  where the data is the sorted data that is passed back up the prop chain 
  see myWorks as an example See fullToolbar component on how it is passing 
  the function through props */
  //const [sortClicked, setSortClicked] = useState();
  const classes = useStyles();

  return (
    <>
      <ButtonGroup data-testid="sort-filter-button-group">
        <Tooltip title="Sort">
          <IconButton
            data-testid="sort-button"
            onClick={props.handleSort}
            className={classes.iconButton}
          >
            <SortOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="filter">
          <IconButton
            data-testid="filt-button"
            onClick={props.handleFilter}
            className={classes.iconButton}
          >
            <FilterListOutlinedIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
      {props.sortClicked && (
        <div data-testid="sort-dialog">
          <SortDialog
            sortClicked={props.sortClicked}
            works={props.works}
            applySortedData={props.applySortedData}
            clearSortedData={props.clearSortedData}
          />
        </div>
      )}

      {props.filterClicked && (
        <div data-testid="filter-dialog">
          <FilterDialog
            filterClicked={props.filterClicked}
            works={props.works}
            applySortedData={props.applySortedData}
            clearSortedData={props.clearSortedData}
          />
        </div>
      )}
    </>
  );
};

export default SortFilterGroup;
