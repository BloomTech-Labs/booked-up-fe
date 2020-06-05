import React, { useState, useEffect } from "react";
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
import { EditAccount } from "../../actions/userAction";

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
    textAlign: 'left',
    width: "100%",
    borderRadius: "3px",
    padding: "10px",
    border: "0.5px solid black",
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
      borderRadius: "10px",
  }
}));

let editing = false

function PersonalInfo(props) {
  const classes = useStyles();

  const [formValue, setFormValue] = useState({
      ...props.user

    });
    
    const handleChange = (e) => {
      e.preventDefault()
      setFormValue({
       ...formValue, 
       [e.target.name]: e.target.value
      })
    }
  
    const onSubmit =() => {
     props.EditAccount(formValue)
    }

//console.log(props.user)

  return (
    <Card className={classes.root}>
      <CardHeader
        title={<Typography variant="h5">Personal information</Typography>}
        className={classes.title}
      />
      <CardContent className={classes.content}>
        <Grid
          container
          justify="center"
          className={classes.container}         
        >         
            <Grid className={classes.formInfo} item xs={3} >
            <p >First Name</p>
            <input className={classes.item}
            type="text"
             name="firstName"
             value={formValue.firstName}
             onChange={handleChange}>
             </input>
             </Grid>
             <Grid className={classes.formInfo} item xs={3} >
            <p >Last Name</p>
            <input className={classes.item}
            type="text"
             name="lastName"
             value={formValue.lastName}
             onChange={handleChange}>
             </input>
             </Grid>
             <Grid className={classes.formInfo} item xs={3} >
            <p >Display Name</p>
            <input className={classes.item}
            type="text"
             name="displayName"
             value={formValue.displayName}
             onChange={handleChange}>
             </input>
             </Grid>
             <Grid className={classes.formInfo} item xs={3} >
            <p >City</p>
            <input className={classes.item}
            type="text"
             name="city"
             value={formValue.city}
             onChange={handleChange}>
             </input>
             </Grid>
             <Grid className={classes.formInfo} item xs={3} >
            <p >State</p>
            <input className={classes.item}
            type="text"
             name="state"
             value={formValue.state}
             onChange={handleChange}>
             </input>
             </Grid>
             <Grid className={classes.formInfo} item xs={3} >
            <p >Country</p>
            <input className={classes.item}
            type="text"
             name="country"
             value={formValue.country}
             onChange={handleChange}>
             </input>
             </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button onClick={(
          ) => {
            onSubmit() }}
              size="small">Save</Button>
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
  {EditAccount}
)(PersonalInfo)