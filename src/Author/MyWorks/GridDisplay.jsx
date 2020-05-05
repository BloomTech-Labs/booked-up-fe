import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditingButtons from "./EditingButtons";

const useStyles = makeStyles(theme => ({
  grid: {
    display: "flex",
    justifyContent: "center"
  },
  gridItem: {
    border: "1px solid black",
    margin: "10px",
    borderRadius: "5px",
    backgroundColor: "#c3c5ef"
  },
  placeholderImage: {
    position: "relative",
    backgroundColor: "grey",
    textAlign: "center",
    color: "white",
    height: "100px",
    padding: "2px"
  },
  authorOverlay: {
    position: "absolute",
    margin: "2px",
    bottom: "0",
    width: "100%"
  },
  title: {
    marginTop: "5px",
    fontWeight: "bold",
    textAlign: "center"
  },
  description: {
    marginTop: "5px",
    textAlign: "center"
  }
}));

export default function GridDisplay(props) {
  const [works, setWorks] = useState(props.authorWorks);
  const classes = useStyles();
  const classname = "grid";

  return (
    <Grid container className={classes.grid} spacing={2}>
      {works.map(work => (
        <>
          <Grid item xs={2} className={classes.gridItem}>
            <div className={classes.placeholderImage}>
              Placeholder Image
              <div className={classes.authorOverlay}>{work.author}</div>
            </div>
            <EditingButtons />
          </Grid>
        </>
      ))}
    </Grid>
  );
}
