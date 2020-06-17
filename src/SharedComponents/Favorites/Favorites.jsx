import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentViewGroup from "../../Author/MyWorks/ToolbarComponents/ContentViewGroup";
import SortFilterGroup from "../../Author/MyWorks/ToolbarComponents/SortFilterGroup";
import SearchGroup from "../../Author/MyWorks/ToolbarComponents/SearchGroup";
import GridDisplay from "./ContentViews/GridDisplay";
import RowDisplay from "./ContentViews/RowDisplay";
import ColumnDisplay from "./ContentViews/ColumnDisplay";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    margin: theme.spacing(2, 0),
    marginLeft: "2px",
    marginRight: "2px",
    marginTop: "2px",
    marginBottom: "2px",
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: "10px"
  },
  contentArea: {
    marginTop: "35px",
    marginLeft: "35px",
    marginRight: "35px"
  }
}));
function Favorites(props) {
  const classes = useStyles();
  const [works, setWorks] = useState(props.contentLibrary);
  const [selected, setSelected] = useState("grid");

  const applySortedData = data => {
    console.log("NL: MyWorks.jsx: applySortedData: data: ", data);
    setWorks(data);
  };

  const setView = selected => {
    setSelected(selected);
  };

  return (
    <>
      <div className={classes.toolbar} data-testid="toolbar">
        <ContentViewGroup works={props.works} setView={setView} />
        <SortFilterGroup
          works={props.works}
          applySortedData={applySortedData}
        />
        <SearchGroup />
      </div>
      <div className={classes.contentArea}>
        {selected === "grid" && <GridDisplay contentWorks={works} />}
        {selected === "row" && <RowDisplay contentWorks={works} />}
        {selected === "column" && <ColumnDisplay contentWorks={works} />}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    contentLibrary: state.contentLibrary,
    currentWork: state.currentWork
  };
};

export default connect(mapStateToProps, {})(Favorites);
