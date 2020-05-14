import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
      marginBottom: "20%"
  },
  title: {
    borderBottom: "1px solid black",
    backgroundColor: theme.palette.primary.light
  },
  avatar: {
    backgroundColor: theme.palette.secondary.light
  },
  item: {
    textAlign: 'center',
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

export default function Profile(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="User" className={classes.avatar}>
            D
          </Avatar>
        }
        title={<Typography variant="h5">Profile</Typography>}
        subheader="Username"
        className={classes.title}
      />
      <CardContent className={classes.content}>
        <Grid
          container
          justify="center"
          className={classes.container}
          spacing={2}
        >
          <Grid item xs={12}>
            <p className={classes.item}>Username</p>
          </Grid>
            <Grid item xs={6}>
            <p className={classes.firstName}>First Name</p>
            </Grid>
            <Grid item xs={6}>
            <p className={classes.lastName}>Last Name</p>
            </Grid>
          <Grid item xs={2}>
          <p className={classes.item}>City</p>
          </Grid>
          <Grid item xs={2}>
          <p className={classes.item}>State</p>
          </Grid>
          <Grid item xs={2}>
          <p className={classes.item}>Country</p>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
