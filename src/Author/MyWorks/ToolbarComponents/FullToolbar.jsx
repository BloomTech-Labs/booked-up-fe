import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UploadContentGroup from "./UploadContentGroup";
import ContentViewGroup from "./ContentViewGroup";
import SortFilterGroup from "./SortFilterGroup";
import SearchGroup from "./SearchGroup";
import { useStyles } from "../../../SharedComponents/materialUIShared";

// const useStyles = makeStyles(theme => ({
//   toolbar: {
//     display: "flex",
//     backgroundColor: theme.palette.secondary.light,
//     margin: theme.spacing(2, 0),
//     marginLeft: "2px",
//     marginRight: "2px",
//     marginTop: "2px",
//     marginBottom: "2px",
//     border: `2px solid ${theme.palette.secondary.dark}`,
//     borderRadius: "10px"
//   }
// }));

const FullToolbar = props => {
  const classes = useStyles();

  return (
    <div className={classes.toolbar} data-testid="toolbar">
      <UploadContentGroup />
      <ContentViewGroup works={props.works} setView={props.setView} />
      <SortFilterGroup
        works={props.works}
        applySortedData={props.applySortedData}
      />
      <SearchGroup />
    </div>
  );
};

export default FullToolbar;
