import React, { useState, useEffect } from "react";
import DisplayGrid from "./DisplayGrid";
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
  const [works, setWorks] = useState(props.works);
  const [isFull, setIsFull] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    if (props.sortFilteredCleared) {
      setIsFull(true);
    }
  }, [props.works]);

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

  return <DisplayGrid imageSet={imageSet} />;
}

const mapStateToProps = state => {
  return {
    works: state.authorContent,
    sortFilteredData: state.sortFilteredData,
    sortFilteredCleared: state.sortClear
  };
};

export default connect(mapStateToProps, {})(GridDisplay);
