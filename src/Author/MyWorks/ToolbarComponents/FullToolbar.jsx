import React, { useState } from "react";
import UploadContentGroup from "./UploadContentGroup";
import ContentViewGroup from "./ContentViewGroup";
import SortFilterGroup from "./SortFilterGroup";
import SearchGroup from "./SearchGroup";
import { sharedToolbarStyles } from "../../../SharedComponents/materialUIShared";

const FullToolbar = props => {
  const [sortClicked, setSortClicked] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);
  const classes = sharedToolbarStyles();

  const handleSort = () => {
    setSortClicked(!sortClicked);
  };

  const handleFilter = () => {
    setFilterClicked(!filterClicked);
  };

  return (
    <div className={classes.toolbar} data-testid="toolbar">
      <UploadContentGroup />
      <ContentViewGroup setView={props.setView} />
      <SortFilterGroup
        works={props.works}
        handleSort={handleSort}
        handleFilter={handleFilter}
        sortClicked={sortClicked}
        filterClicked={filterClicked}
        applySortedData={props.applySortedData}
        clearSortedData={props.clearSortedData}
      />
      <SearchGroup />
    </div>
  );
};

export default FullToolbar;
