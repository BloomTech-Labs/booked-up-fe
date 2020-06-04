import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import GridDisplay from "./ContentViews/GridDisplay";
import RowDisplay from "./ContentViews/RowDisplay";
import ColumnDisplay from "./ContentViews/ColumnDisplay";
import { data } from "../../data";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import ViewStreamOutlinedIcon from "@material-ui/icons/ViewStreamOutlined";
import ViewWeekOutlinedIcon from "@material-ui/icons/ViewWeekOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import SortOutlinedIcon from "@material-ui/icons/SortOutlined";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import SortDialog from "./Dialogs/SortDialog";
import FilterDialog from "./Dialogs/FilterDialog";
import UploadModal from "./UploadModal.jsx";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import FullToolbar from "./ToolbarComponents/FullToolbar";

const useStyles = makeStyles(theme => ({
  contentArea: {
    marginTop: "35px",
    marginLeft: "35px",
    marginRight: "35px"
  }
}));

export const MyWorks = props => {
  const [works, setWorks] = useState(props.authorContent);
  const [selected, setSelected] = useState("grid");

  const applySortedData = data => {
    console.log("NL: MyWorks.jsx: applySortedData: data: ", data);
    setWorks(data);
  };

  const setView = selected => {
    setSelected(selected);
  };

  const classes = useStyles();

  return (
    <>
      <FullToolbar
        works={props.authorContent}
        applySortedData={applySortedData}
        setView={setView}
      />

      <div className={classes.contentArea}>
        {selected === "grid" && <GridDisplay authorWorks={works} />}
        {selected === "row" && <RowDisplay authorWorks={works} />}
        {selected === "column" && <ColumnDisplay authorWorks={works} />}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    authorContent: state.authorContent
  };
};

export default connect(mapStateToProps, {})(MyWorks);
