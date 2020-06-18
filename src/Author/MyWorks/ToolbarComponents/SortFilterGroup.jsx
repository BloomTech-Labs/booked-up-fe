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
  const [sortClicked, setSortClicked] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);
  const classes = useStyles();

  console.log(
    "NL: SortFilterGroup: SortFilterGroup: Line 35: props.works: ",
    props.works
  );

  const handleSort = () => {
    setSortClicked(true);
  };

  const handleFilter = () => {
    setFilterClicked(true);
  };

  // const handleFilterClose = value => {
  //   setFilterClicked(false);
  // };

  // const handleSortClear = value => {
  //   setSortClicked(false);
  //   console.log(
  //     "NL: SortFilterGroup: handleSortClear: Line 48: props.works: ",
  //     props.works
  //   );
  //   console.log(
  //     "NL: SortFilterGroup: handleSortClear: Line 50: props.sortedData: ",
  //     props.sortedData
  //   );

  //   clearSortedData();
  // };

  // const handleSortClose = value => {
  //   setSortClicked(false);

  //   let localSortedData = [];
  //   let localFullData = _.cloneDeep(props.works);
  //   console.log(
  //     "NL: SortFilterGroup: handleSortClose: Line 65: props.works: ",
  //     props.works
  //   );
  //   console.log(
  //     "NL: SortFilterGroup: handleSortClose: Line 60: localSortedData: ",
  //     localSortedData
  //   );

  //   if (value !== null) {
  //     switch (value) {
  //       case "Title: A to Z": {
  //         localSortedData = localFullData.sort(function(a, b) {
  //           if (a.title < b.title) return -1;
  //           else if (a.title > b.title) return 1;
  //           return 0;
  //         });
  //         break;
  //       }
  //       case "Title: Z to A": {
  //         localSortedData = localFullData.sort(function(a, b) {
  //           if (a.title < b.title) return 1;
  //           else if (a.title > b.title) return -1;
  //           return 0;
  //         });
  //         break;
  //       }
  //       case "Author: A to Z": {
  //         localSortedData = localFullData.sort(function(a, b) {
  //           if (a.author < b.author) return -1;
  //           else if (a.author > b.author) return 1;
  //           return 0;
  //         });
  //         break;
  //       }
  //       case "Author: Z to A": {
  //         localSortedData = localFullData.sort(function(a, b) {
  //           if (a.author < b.author) return 1;
  //           else if (a.author > b.author) return -1;
  //           return 0;
  //         });
  //         break;
  //       }
  //       case "Genre: A to Z": {
  //         localSortedData = localFullData.sort(function(a, b) {
  //           if (a.genre < b.genre) return -1;
  //           else if (a.genre > b.genre) return 1;
  //           return 0;
  //         });
  //         break;
  //       }
  //       case "Genre: Z to A": {
  //         localSortedData = localFullData.sort(function(a, b) {
  //           if (a.genre < b.genre) return 1;
  //           else if (a.genre > b.genre) return -1;
  //           return 0;
  //         });
  //         break;
  //       }
  //       case "Popularity": {
  //         break;
  //       }
  //       default:
  //         break;
  //     }
  //     console.log(
  //       "NL: SortFilterGroup: handleSortClose: Line 130: props.works: ",
  //       props.works
  //     );
  //     console.log(
  //       "NL: SortFilterGroup: handleSortClose: Line 118: localSortedData: ",
  //       localSortedData
  //     );
  //     setSortedData(localSortedData);
  //   }
  // };

  return (
    <>
      <div data-testid="sort-dialog">
        <SortDialog sortClicked={sortClicked} />
      </div>

      <div data-testid="filter-dialog">
        <FilterDialog />
      </div>
      <ButtonGroup data-testid="sort-filter-button-group">
        <Tooltip title="Sort">
          <IconButton
            data-testid="sort-button"
            onClick={handleSort}
            className={classes.iconButton}
          >
            <SortOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="filter">
          <IconButton
            data-testid="filt-button"
            onClick={handleFilter}
            className={classes.iconButton}
          >
            <FilterListOutlinedIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     works: state.authorContent,
//     sortedData: state.sortFilteredData
//   };
// };

// export default connect(mapStateToProps, { setSortedData, clearSortedData })(
//   SortFilterGroup
// );

export default SortFilterGroup;
