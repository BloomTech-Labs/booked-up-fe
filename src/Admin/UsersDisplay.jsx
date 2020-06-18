import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';


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
    justifyContent: "space-evenly"
  },

  standard: {
    margin: "10px",
    textAlign: "center"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    border: `2px solid ${theme.palette.secondary.light}`,
    background: `${theme.palette.primary.light}`,
    marginTop: "10px",
    borderRadius: "10px"
  },
  buttonG: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "secondary",
    "&:hover": {
      backgroundColor: "Crimson"
    }
  },
}));

function UsersDisplay(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  let userArray = [];
  props.userAccounts.map(user => {
    return (userArray = [...userArray, Object.values(user)]);
  });
  /*
  const handleClick = () => {
    props.setWork(props.work);
    window.location.replace(`/dashboard/book`);
  };
  */

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(userArray);

  return (
    <>
      <Grid container className={classes.grid} spacing={2}>
        {userArray.map(user => (
          <Grid item xs={12} className={classes.gridItem}>
            {user.map(property => (
              <Grid item xs={6} sm={3} className={classes.standard}>
                {property}
              </Grid>
            ))}
            <ButtonGroup className={classes.buttonGroup}>
              <Tooltip title="Edit User">
                <IconButton className={classes.buttonG}>
                  <EditOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Delete User Account"
                onClick={handleClickOpen}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Tooltip>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to DELETE the user account?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    The user account will be deleted permanently.
                   </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="secondary">
                    No
                  </Button>
                  <Button onClick={() => {
                  }} color="secondary" autoFocus>
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
            </ButtonGroup>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UsersDisplay;
