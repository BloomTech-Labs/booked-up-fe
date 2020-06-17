import React, { useState } from "react";
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
import { EditEmail } from "../../actions/userAction"

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: "8%",
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
        border: "0.5px solid black"
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


function ChangeEmail(props)  {
    const classes = useStyles();

    const [emailValue, setEmailValue] = useState({
        ...props.user
    });

    const  handleChange = (e) => {
        e.preventDefault()
        setEmailValue({
            ...emailValue,
            [e.target.name]: e.target.value
        })
    }

  const onSubmit = () => {
    props.EditEmail(emailValue)
  }

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
            <Grid className={classes.formInfo} item xs={3} >
            <p >Email Address</p>
            <input className={classes.item}
            type="text"
             name="email"
             value={emailValue.email}
             onChange={handleChange}>
             </input>
             </Grid>
    </Grid>
      </CardContent>
      <Divider />
      <ExpansionPanelActions>
          <Button onClick={() => {  window.history.back(); }} size="small">Cancel</Button>
          <Button onClick={(
          ) => {
            onSubmit() }}size="small">Save</Button>
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
    {EditEmail}
)(ChangeEmail)
