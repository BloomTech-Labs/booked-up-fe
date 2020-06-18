import React from "react";
import Grid from "@material-ui/core/Grid";
import EditingButtons from "../EditingButtons";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

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

function DisplayGrid(props) {
  const classes = useStyles();
  console.log(
    "NL: DisplayGrid.jsx: DisplayGrid: Line 50: props.works: ",
    props.works
  );
  console.log(
    "NL: DisplayGrid.jsx: DisplayGrid: Line 50: props.sortFilteredData: ",
    props.sortFilteredData
  );
  console.log(
    "NL: DisplayGrid.jsx: DisplayGrid: Line 50: props.sortFilteredCleared: ",
    props.sortFilteredCleared
  );
  return (
    <Grid container className={classes.grid} spacing={2}>
      {(props.sortFilteredCleared || props.sortFilteredCleared === undefined) &&
        props.works.map((work, index) => (
          <Grid item xs={2} key={index} className={classes.gridItem}>
            <div
              style={props.imageSet(work)}
              className={classes.placeholderImage}
            >
              {work.title}
              <div className={classes.authorOverlay}>{work.author}</div>
            </div>
            <EditingButtons work={work} handleDelOpen={props.handleDelOpen} />
          </Grid>
        ))}
      {(props.sortFilteredCleared === false ||
        props.sortFilteredCleared !== undefined) &&
        props.sortFilteredData.map((work, index) => (
          <Grid item xs={2} key={index} className={classes.gridItem}>
            <div
              style={props.imageSet(work)}
              className={classes.placeholderImage}
            >
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
    works: state.authorContent,
    sortFilteredData: state.sortFilteredData,
    sortFilteredCleared: state.sortFilteredCleared
  };
};

export default connect(mapStateToProps, {})(DisplayGrid);
