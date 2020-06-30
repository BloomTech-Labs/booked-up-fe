import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: "20%",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    borderBottom: "1px solid black",
    backgroundColor: theme.palette.primary.light
  },
  avatar: {
    backgroundColor: theme.palette.secondary.light
  },
  item: {
    textAlign: "center"
  },
  firstName: {
    textAlign: "right",
    paddingRight: "3%"
  },
  lastName: {
    textAlign: "left",
    paddingLeft: "3%"
  }
}));

function Profile(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="User" className={classes.avatar}>
            {props.user.displayName.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={<Typography variant="h5">Profile</Typography>}
        subheader={props.user.displayName}
        className={classes.title}
      />
      <CardContent className={classes.content}>
        <Grid
          container
          justify="center"
          className={classes.container}
          spacing={2}
        >
          <Grid item xs={6} data-testid="first-name">
            <p className={classes.firstName}>
              First Name: {props.user.firstName}
            </p>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.lastName}>Last Name: {props.user.lastName}</p>

            </Grid>
           <Grid item xs={2}>
          </Grid>
           <Grid item xs={2}>

          <p className={classes.item}>City: {props.user.city}</p>
          </Grid>
          <Grid item xs={2}>
          <p className={classes.item}>State: {props.user.state}</p>
          </Grid>
          <Grid item xs={2}>
          <p className={classes.item}>Country: {props.user.country}</p>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged
  };
};

export default connect(mapStateToProps, {})(Profile);
