import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { DeleteUser } from "../../actions/userAction";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
      marginBottom: "12%",
      width: "80%",
      marginLeft: "10%",
      padding: "6%"
  },
  title: {
    borderBottom: "1px solid black",
    backgroundColor: theme.palette.primary.light,
    boxShadow: "0.1rem 0.05rem 0.5rem 0.1rem",
  },

  content: {
      display: "flex",
      justifyContent: "left", 
      padding: "5%"
  },
  container: {
      justifyContent: "center",
      border: "1px solid red",
  }
}));

function DeleteAccount(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [userDelete, setUserDelete] = useState({
    ...props.user
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    props.DeleteUser(userDelete)
  }

  return (
  <Card className={classes.root}>
    <CardHeader
      title={<Typography variant="h5">Delete user account</Typography>}
      className={classes.title}
    />
    <CardContent className={classes.content}>
      <Typography style={{ marginRight: "5%", marginTop: "1%" }}>Please click the button to delete your account</Typography>
      <Button className={classes.container}  onClick={handleClickOpen}>
        Delete my account
      </Button>
      </CardContent>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to DELETE your account?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Account will be deleted permanently.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            No
          </Button>
          <Button onClick={() => { 
            onSubmit(); 
          }} color="secondary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
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
  {DeleteUser}
)(DeleteAccount)