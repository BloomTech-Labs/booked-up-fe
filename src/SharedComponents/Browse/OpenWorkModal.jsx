import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { setWork } from "../../actions/authorAction";
import { connect } from "react-redux";
import { sharedPaperStyles } from "../materialUIShared";

function OpenWorkModal(props) {
  const classes = sharedPaperStyles();

  const handleReadClick = () => {
    props.setWork(props.work);
    window.location.replace(`/dashboard/book`);
  };
  return (
    <Card className={classes.paper}>
      <CardHeader
        title={<Typography variant="h5">{props.work.title}</Typography>}
      />
      <CardContent>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <p>Author</p>
          </Grid>
          <Grid item xs={6}>
            <p>Image</p>
          </Grid>

          <Grid item xs={6}>
            <p>Description</p>
            <p>{props.work.description}</p>
          </Grid>
          <Button variant="contained" color="secondary">
            Add to Favorites
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReadClick}
          >
            Read Now
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    currentWork: state.currentWork
  };
};

export default connect(mapStateToProps, { setWork })(OpenWorkModal);
