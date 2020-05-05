import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import GridDisplay from "./GridDisplay";
import RowDisplay from "./RowDisplay";
import ColumnDisplay from "./ColumnDisplay";
import { data } from "../../data";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import ViewStreamOutlinedIcon from "@material-ui/icons/ViewStreamOutlined";
import ViewWeekOutlinedIcon from "@material-ui/icons/ViewWeekOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import SortOutlinedIcon from "@material-ui/icons/SortOutlined";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

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
  leftToolbarButton: {
    marginRight: "25px"
  },
  rightToolbarButtonGroup: {
    backgroundColor: theme.palette.secondary.light,
    marginRight: "25px",
    paddingTop: "2px"
  },
  rightButtonGroup: {
    backgroundColor: theme.palette.secondary.light,
    marginRight: "25px"
  },
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
  contentArea: {
    marginTop: "35px",
    marginLeft: "35px",
    marginRight: "35px"
  }
}));

export default function MyWorks(props) {
  const [selected, setSelected] = useState("grid");

  const handleSelect = (event, selected) => {
    setSelected(selected);
  };
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar}>
        <div className={classes.leftToolbarButton}>
          <IconButton>
            <PublishOutlinedIcon />
          </IconButton>
        </div>
        <div className={classes.rightToolbarButtonGroup}>
          <ToggleButtonGroup
            value={selected}
            exclusive
            className={classes.rightButtonGroup}
            onChange={handleSelect}
            aria-label="Text Alignment"
          >
            <ToggleButton
              value="grid"
              className={classes.iconButton}
              aria-label="grid"
            >
              <ViewModuleOutlinedIcon />
            </ToggleButton>
            <ToggleButton
              value="row"
              className={classes.iconButton}
              aria-label="row"
            >
              <ViewWeekOutlinedIcon />
            </ToggleButton>
            <ToggleButton
              value="column"
              className={classes.iconButton}
              aria-label="column"
            >
              <ViewStreamOutlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <ButtonGroup>
          <IconButton>
            <SortOutlinedIcon />
          </IconButton>
          <IconButton>
            <FilterListOutlinedIcon />
          </IconButton>
        </ButtonGroup>
        <div className={classes.searchGroup}>
          <SearchOutlinedIcon />
          <TextField id="search" className={classes.searchBar} label="Search" />
        </div>
      </div>
      <div className={classes.contentArea}>
        {selected === "grid" && <GridDisplay authorWorks={data.author_works} />}
        {selected === "row" && <RowDisplay authorWorks={data.author_works} />}
        {selected === "column" && <ColumnDisplay />}
      </div>
    </>
  );
}
