import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ReadingButtons from "../ReadingButtons";
import ImagePlaceholder from "../../../assets/image-placeholder.png";


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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  placeholderImage: {
    position: "relative",
    backgroundSize: "100% 100%",
    backgroundColor: "grey",
    textAlign: "center",
    color: "white",
    height: "100px",
    padding: "2px",
    display: "flex",
    justifyContent: "center",
    width: "15%"
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
    fontStyle: "italic",
    textAlign: "center"
  },
  description: {
    marginTop: "5px",
    textAlign: "center",
    marginRight: "10px"
  }
}));

export default function ColumnDisplay(props) {
  const [works] = useState(props.contentWorks);
  const classes = useStyles();


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
          <Grid item xs={12} key={index} className={classes.gridItem}>
            <div style={imageSet(work)} className={classes.placeholderImage}>
              <Grid item xs={6} sm={3} className={classes.authorOverlay}>
                {work.author}
              </Grid>
            </div>
            <Grid item xs={6} sm={3} className={classes.title}>
              {work.title}
            </Grid>
            <Grid item xs={6} sm={3} className={classes.genre}>
              {work.genre}
            </Grid>
            <Grid item xs={6} sm={3} className={classes.description}>
              {work.description}
            </Grid>
            {props.openButton == true && (
                <ReadingButtons book={work.content_url} />
            )}
            
          </Grid>
        
      ))}
    </Grid>
  );
}
