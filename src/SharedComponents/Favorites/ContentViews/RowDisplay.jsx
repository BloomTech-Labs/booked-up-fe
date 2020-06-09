import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ReadingButtons from "../ReadingButtons";

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
  genre: {
    marginTop: "10px",
    marginBottom: "10px",
    fontStyle: "italic",
    textAlign: "center"
  },
  description: {
    marginTop: "5px",
    textAlign: "center"
  }
}));

export default function RowDisplay(props) {
  const [works] = useState(props.contentWorks);
  const classes = useStyles();

  return (
    <Grid container className={classes.grid} spacing={2}>
      {works.map((work, index) => (
          <Grid item xs={2} key={index} className={classes.gridItem}>
            <div className={classes.placeholderImage}>
              Placeholder Image
              <div className={classes.authorOverlay}>{work.author}</div>
            </div>
            <div className={classes.title}>{work.title}</div>
            <div className={classes.genre}>{work.genre}</div>
            <div className={classes.description}>{work.description}</div>
            <ReadingButtons book={work.content_url} />
          </Grid>
      ))}
    </Grid>
  );
}
