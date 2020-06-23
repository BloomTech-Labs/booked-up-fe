import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  works: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    alignItems: "center",
    border: "1px solid black",
    width: "100%",
    height: "11.25em",
    opacity: "0",
    "&:hover": {
      transparency: "0%",
      opacity: ".5",
      border: "1px dashed white"
    }
  },
  featWorks: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    alignItems: "center",
    border: "1px solid black",
    width: "100%",
    height: "15em",
    opacity: "0",
    "&:hover": {
      transparency: "0%",
      opacity: ".5",
      border: "1px dashed white"
    }
  },
  work: {
    width: "90%",
    margin: "auto"
  }
}));

export const RenderWork = props => {
  const classes = useStyles();
  return (
    <div key={props.i} className={props.feat ? classes.featWorks : classes.works}>
      <p className={classes.work}>{props.cl.title}</p>
      <p className={classes.work}>{props.cl.description}</p>
      <p className={classes.work}>{props.cl.author}</p>
    </div>
  );
};

export default RenderWork;
