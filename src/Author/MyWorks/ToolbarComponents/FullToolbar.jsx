import React from "react";
import UploadContentGroup from "./UploadContentGroup";
import ContentViewGroup from "./ContentViewGroup";
import SortFilterGroup from "./SortFilterGroup";
import SearchGroup from "./SearchGroup";
import { sharedToolbarStyles } from "../../../SharedComponents/materialUIShared";

const FullToolbar = props => {
  const classes = sharedToolbarStyles();

  return (
    <div className={classes.toolbar} data-testid="toolbar">
      <UploadContentGroup />
      <ContentViewGroup setView={props.setView} />
      <SortFilterGroup />
      <SearchGroup />
    </div>
  );
};

export default FullToolbar;
