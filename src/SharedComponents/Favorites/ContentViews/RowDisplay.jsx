import React, { useState } from "react";
//material ui imports
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//component imports
import ReadingButtons from "../ReadingButtons";
//asset imports
import ImagePlaceholder from "../../../assets/image-placeholder.png";

//component styles
const useStyles = makeStyles(theme => ({
  grid: {
    display: "flex",
    justifyContent: "center"
  },
  gridItem: {
    border: "1px solid black",
    margin: "10px",
    borderRadius: "5px",
    backgroundColor: "#c3c5ef",
    minWidth: "200px"
  },
  placeholderImage: {
    position: "relative",
    backgroundSize: "100% 100%",
    backgroundColor: "grey",
    textAlign: "center",
    color: "white",
    height: "100px",
    width: "100%",
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

  /*Makes the background image either the image uploaded by the author or a placeholder image*/
  const imageSet = (work) => {
    if(work.img_url) {
      return {
        backgroundImage: `url("${work.img_url}")`
      }
    }
    else {
      return {
        backgroundImage: `url("${ImagePlaceholder}")`
      }
    }
  }

  return (
    /* Maps through the works that were passed as props and places them in a row format*/
    <Grid container className={classes.grid} spacing={2}>
      {works.map((work, index) => (
          <Grid item xs={2} key={index} className={classes.gridItem}>
            <div style={imageSet(work)} className={classes.placeholderImage}>
              <div className={classes.authorOverlay}>{work.author}</div>
            </div>
            <div className={classes.title}>{work.title}</div>
            <div className={classes.genre}>{work.genre}</div>
            <div className={classes.description}>{work.description}</div>
            <ReadingButtons book={work.content_url} handleRemOpen={props.handleRemOpen}/>
          </Grid>
      ))}
    </Grid>
  );
}
