import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import ViewStreamOutlinedIcon from "@material-ui/icons/ViewStreamOutlined";
import ViewWeekOutlinedIcon from "@material-ui/icons/ViewWeekOutlined";

const useStyles = makeStyles(theme => ({
  leftToolbarButton: {
    marginRight: "25px"
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  rightToolbarButtonGroup: {
    backgroundColor: theme.palette.secondary.light,
    marginRight: "25px",
    paddingTop: "2px"
  },
  rightButtonGroup: {
    backgroundColor: theme.palette.secondary.light,
    marginRight: "25px"
  }
}));

const ContentViewGroup = props => {
  /* NOTE: The Component that renders the content area (the works)
  must pass the following in it:
  const setView = selected => {
    setSelected(selected);
  };
  where selected is the content view it currently displaying
  grid, row or column. See myWorks for an example of this. See
  fullToolbar component on how it is passing the function through
  props */
  const [selected, setSelected] = useState("grid");
  const classes = useStyles();

  const handleSelect = (event, selected) => {
    setSelected(selected);
    props.setView(selected);
  };

  return (
    <>
      <div className={classes.rightToolbarButtonGroup}>
        <ToggleButtonGroup
          value={selected}
          data-testid="toggle-button-group"
          exclusive
          className={classes.rightButtonGroup}
          onChange={handleSelect}
          aria-label="Text Alignment"
        >
          <Tooltip title="Grid">
            <ToggleButton
              value="grid"
              data-testid="grid-button"
              className={classes.iconButton}
              aria-label="grid"
            >
              <ViewModuleOutlinedIcon />
            </ToggleButton>
          </Tooltip>
          <Tooltip title="Row">
            <ToggleButton
              value="row"
              data-testid="row-button"
              className={classes.iconButton}
              aria-label="row"
            >
              <ViewWeekOutlinedIcon />
            </ToggleButton>
          </Tooltip>
          <Tooltip title="Column">
            <ToggleButton
              value="column"
              data-testid="column-button"
              className={classes.iconButton}
              aria-label="column"
            >
              <ViewStreamOutlinedIcon />
            </ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
      </div>
      {/* <div className={classes.contentArea}>
        {selected === "grid" && <GridDisplay authorWorks={props.works} />}
        {selected === "row" && <RowDisplay authorWorks={props.works} />}
        {selected === "column" && <ColumnDisplay authorWorks={props.works} />}
      </div> */}
    </>
  );
};

export default ContentViewGroup;
