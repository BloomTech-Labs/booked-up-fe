import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditingButtons from "../EditingButtons";
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
    textAlign: "center",
    color: "white",
    height: "100px",
    padding: "2px"
  },
  image: {
    height: "100px"
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

function GridDisplay(props) {
  const classes = useStyles();

  const imageSet = work => {
    if (work.img_url) {
      return {
        backgroundImage: `url("${work.img_url}")`
      };
    } else {
      return {
        backgroundImage: `url("${ImagePlaceholder}")`
      };
    }
  };

  return (
    <Grid container className={classes.grid} spacing={2}>
      {props.isFull &&
        props.works.map((work, index) => (
          <Grid item xs={2} key={index} className={classes.gridItem}>
            <div style={imageSet(work)} className={classes.placeholderImage}>
              {work.title}
              <div className={classes.authorOverlay}>{work.author}</div>
            </div>
            <EditingButtons work={work} handleDelOpen={props.handleDelOpen} />
          </Grid>
        ))}
      {!props.isFull &&
        props.sortFilteredData.map((work, index) => (
          <Grid item xs={2} key={index} className={classes.gridItem}>
            <div style={imageSet(work)} className={classes.placeholderImage}>
              {work.title}
              <div className={classes.authorOverlay}>{work.author}</div>
            </div>
            <EditingButtons work={work} handleDelOpen={props.handleDelOpen} />
          </Grid>
        ))}
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    works: state.authorContent
    // sortFilteredData: state.sortFilteredData,
    // sortFilteredCleared: state.sortFilteredCleared
  };
};

export default connect(mapStateToProps, {})(GridDisplay);
