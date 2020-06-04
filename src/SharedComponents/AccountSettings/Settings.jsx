import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Users } from "../../Admin/Users";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";
import PersonalInfo from "./PersonalInfo.jsx";
import ChangeEmail from "./ChangeEmail.jsx";
import ChangePass from "./ChangePass.jsx";
import DeleteAccount from "./DeleteAccount.jsx";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    marginRight: "-.5em",
    marginLeft: "-.5em"
  },
  drawerPaper: {
    backgroundColor: theme.palette.secondary.dark,
    color: "black",
    borderRight: "0px solid black",
    marginTop: "4.65%",
    marginBottom: "4.7em",
    width: "15%",
    boxShadow: "0.1rem 0.3rem 0.8rem 0.05rem"
  },
  title: {
    padding: "1%",
    color: theme.palette.secondary.main
  },
  settingCon: {
    width: "80%",
    margin: "auto",
    backgroundColor: "white",
  },
  settings: {
    border: "0px solid black",
    backgroundColor: "darkGrey"
  },
  settingNavCon: {
    display: "flex",
    border: "1px solid black",
    height: "3em",
    backgroundColor: theme.palette.primary.dark
  },
  settingNav: {
    ...theme.typography.tab,
    padding: ".5%",
    paddingRight: "1%",
    marginTop: 0,
    marginBottom: 0,
    height: "3em",
    border: "1px solid black",
    backgroundColor: theme.palette.primary.main
    
  },
  content: {
    marginTop: "3%",
    width: "80%",
    marginLeft: "15%",
    marginBottom: "15%"
    
  },
  listItem: {
    color: "whitesmoke", 
  }
}));

function Settings(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [component, setComponent] = useState();
  
  useEffect(() => {
    if (props.user.userType.toLowerCase().includes("admin")) {
      setComponent(<Users userAccounts={props.userAccounts} />);
    } else {
      setComponent(<PersonalInfo/>);
    }
  }, []);
  useEffect(() => {
    switch (window.location.pathname) {
      case "/settings":
        if (props.user.userType.toLowerCase().includes("admin")) {
          setComponent(<Users userAccounts={props.userAccounts} />);
        } else {
          setComponent(<PersonalInfo />);
        }
        break;

      case "/settings/change-email":
        setComponent(<ChangeEmail/>);
        break;

      case "/settings/change-password":
        setComponent(<ChangePass />);
        break;

      case "/settings/delete-account":
        setComponent(<DeleteAccount />);
        break;

      default:
        break;
    }
  }, [value]);

  return (
    <div className={classes.container}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
        data-testid="sidebar"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {!props.user.userType.toLowerCase().includes("admin") && (
            <ListItem
              component={Link}
              to="/settings"
              className={classes.listItem}
              data-testid="sidebar-browse"
              onClick={() => setComponent(<PersonalInfo />)}
            >
              <ListItemText primary="Personal Information"  />
            </ListItem>
          )}
          {!props.user.userType.toLowerCase().includes("admin") && (
            <ListItem
              component={Link}
              to="/settings/change-email"
              className={classes.listItem}
              data-testid="sidebar-settings"
              value={<ChangeEmail />}
              onClick={() => setComponent(<ChangeEmail />)}
            >
              <ListItemText
                primary="Change Email"
                
              />
            </ListItem>
            
          )}
  
          
          {props.user.userType.toLowerCase().includes("author") && (
            <ListItem
              component={Link}
              to="/settings/change-password"
              className={classes.listItem}
              data-testid="sidebar-works"
              onClick={() => setComponent(<ChangePass />)}
            >
              <ListItemText primary="Change Password"  />
            </ListItem>
          )}

        {props.user.userType.toLowerCase().includes("author") && (
            <ListItem
              component={Link}
              to="/settings/delete-account"
              className={classes.listItem}
              data-testid="sidebar-works"
              onClick={() => setComponent(<DeleteAccount />)}
            >
              <ListItemText primary="Delete Account"  />
            </ListItem>
          )}
        </List>
        <Divider />
      </Drawer>
      <div className={classes.content}>{component}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    userAccounts: state.userAccounts,
    currentWork: state.currentWork
  };
};

export default connect(mapStateToProps, {})(Settings);
