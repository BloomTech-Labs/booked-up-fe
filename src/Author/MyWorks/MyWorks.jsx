import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import ViewStreamOutlinedIcon from "@material-ui/icons/ViewStreamOutlined";
import ViewWeekOutlinedIcon from "@material-ui/icons/ViewWeekOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import OpenInBrowserOutlinedIcon from "@material-ui/icons/OpenInBrowserOutlined";
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
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: "10px"
  },
  leftToolbarButton: {
    justifyContent: "flex-start"
  },
  rightToolbarButtonGroup: {
    backgroundColor: theme.palette.secondary.light,
    justifyContent: "flex-end"
  },
  rightButtonGroup: {
    backgroundColor: theme.palette.secondary.light
  },
  searchGroup: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "middle"
  },

  uploadButtonGroup: {
    display: "flex",
    justifyContent: "flex-start"
  },
  iconButton: {}
}));

export default function MyWorks(props) {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>
      <div className={classes.leftToolbarButton}>
        <IconButton>
          <PublishOutlinedIcon />
        </IconButton>
      </div>
      <div className={classes.rightToolbarButtonGroup}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          className={classes.rightButtonGroup}
          onChange={handleAlignment}
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
      <div class={classes.searchGroup}>
        <SearchOutlinedIcon />
        <TextField id="search" label="Search" />
      </div>
    </div>
  );
}
