import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { connect } from "react-redux";
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: "0%",
        width: "90%",
        marginLeft: "10%",
    },
    title: {
      borderBottom: "1px solid black",
      backgroundColor: theme.palette.primary.light,
      boxShadow: "0.1rem 0.05rem 0.5rem 0.1rem",
    },
    item: {
      textAlign: 'center',
    },
    content: {
        display: "flex"
    },
    container: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center"
    },
    formInfo: {
        border: "1px solid lightgrey",
        margin: "0.3%",
        borderRadius: "10px",
    }
  }));


function ChangeEmail(props)  {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardHeader
          title={<Typography variant="h5">Change Email Address</Typography>}
          className={classes.title}
        />
        <CardContent className={classes.content}>
          <Grid
            container
            justify="center"
            className={classes.container}
            spacing={0.2}
          >
             <Grid  className={classes.formInfo} item xs={6}>
            <p className={classes.item}>Email Address {props.user.email}</p>
            </Grid>
    </Grid>
      </CardContent>
      <Divider />
      <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small">Save</Button>
      </ExpansionPanelActions>
    </Card>
  );
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLogged: state.isLogged,
    }
  }
  
  export default connect (
    mapStateToProps,
    {}
)(ChangeEmail)
