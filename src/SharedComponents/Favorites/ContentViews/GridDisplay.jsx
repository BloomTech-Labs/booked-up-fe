import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ReadingButtons from "../ReadingButtons";
import { datePickerDefaultProps } from "@material-ui/pickers/constants/prop-types";
import ImagePlaceholder from "../../../assets/image-placeholder.png";
const useStyles = makeStyles(theme => ({
  grid: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "15%"
  },
  gridItem: {
    border: "1px solid black",
    margin: "10px",
    borderRadius: "5px",
    backgroundColor: "#c3c5ef",
    width: "90%"
  },
  placeholderImage: {
    position: "relative",
    backgroundSize: "100% 100%",
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
  const [works] = useState(props.contentWorks);
  const classes = useStyles();
  useEffect(() => {
    console.log(works)
  }, [])
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
    <Grid container className={classes.grid} spacing={2}>
      {works.map((work, index) => (
          <Grid item xs={2} key={index} className={classes.gridItem}>
            <div style={imageSet(work)} className={classes.placeholderImage}>
              <div className={classes.authorOverlay}>{work.title}</div>
            </div>
            <ReadingButtons work={work} />
          </Grid>
      ))}
    </Grid>
  );
}


