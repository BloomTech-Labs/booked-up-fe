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

const useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      left: "35%",
      top: "20%",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));

function OpenWorkModal(props) {
    const classes = useStyles();


    const handleReadClick = () => {
        props.setWork(props.work)
        window.location.replace(`/dashboard/book`)
      };
    return(
        <Card className={classes.paper}>
      <CardHeader title={<Typography variant="h5">{props.work.title}</Typography>} />
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
              
            </Grid>
            <Button variant="contained" color="secondary">
              Add to Favorites
            </Button>
            <Button variant="contained" color="secondary" onClick={handleReadClick}>
              Read Now
            </Button>
          </Grid>
        
      </CardContent>
    </Card>
    )
}

const mapStateToProps = state => {
    return {
      user: state.user,
      isLogged: state.isLogged,
      currentWork: state.currentWork
    };
  };
  
  export default connect(mapStateToProps, { setWork })(OpenWorkModal);
  