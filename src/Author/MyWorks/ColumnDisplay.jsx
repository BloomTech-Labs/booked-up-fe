import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";

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
    backgroundColor: "grey",
    textAlign: "center",
    color: "white",
    height: "100px",
    display: "flex",
    padding: "2px",
    justifyContent: "center"
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
  },
  buttonGroup: {
    justifyContent: "center",
    alignContent: "flex-end"
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

export default function ColumnDisplay(props) {
  const [works, setWorks] = useState(props.authorWorks);
  const classes = useStyles();

  return (
    <Grid container className={classes.grid} spacing={2}>
      {works.map(work => (
        <>
          <Grid item direction="column" xs={12} className={classes.gridItem}>
            <div className={classes.placeholderImage}>
              Placeholder Image
              <Grid item xs={6} sm={3} className={classes.authorOverlay}>
                {work.author}
              </Grid>
            </div>
            <Grid item xs={6} sm={3} className={classes.title}>
              {work.title}
            </Grid>
            <Grid item xs={6} sm={3} className={classes.description}>
              {work.description}
            </Grid>
            <ButtonGroup className={classes.buttonGroup}>
              <IconButton className={classes.button}>
                <ImportContactsOutlinedIcon />
              </IconButton>
              <IconButton className={classes.button}>
                <EditOutlinedIcon />
              </IconButton>
              <IconButton className={classes.button}>
                <DeleteForeverOutlinedIcon />
              </IconButton>
            </ButtonGroup>
          </Grid>
        </>
      ))}
    </Grid>
  );
}
