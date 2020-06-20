import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Users } from "../../Admin/Users";
import Drawer from "@material-ui/core/Drawer";
import MyWorks from "../../Author/MyWorks/MyWorks";
import Profile from "../../Author/Profile/Profile.jsx";
import Favorites from "../Favorites/Favorites.jsx";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";
import Browse from "../Browse/Browse.jsx";
import WorkView from "../../Author/MyWorks/WorkView/WorkView.jsx";
import { getUsers } from "../../actions/adminAction.js";
import { removeSelWork } from "../../actions/userAction.js";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    marginRight: "-.5em",
    marginLeft: "-.5em"
  },
  drawerPaper: {
    backgroundColor: theme.palette.secondary.light,
    color: "white",
    borderRight: "1px solid black",
    marginTop: "4.34em",
    marginBottom: "4.33em",
    width: "10em"
  },
  title: {
    padding: "1%",
    color: theme.palette.secondary.main
  },
  dashCon: {
    width: "80%",
    margin: "auto",
    backgroundColor: "white"
  },
  dashboard: {
    border: "1px solid black"
  },
  dashNavCon: {
    display: "flex",
    border: "1px solid black",
    height: "3em",
    backgroundColor: theme.palette.primary.dark
  },
  dashNav: {
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
    marginBottom: "15%",
    minHeight: "30em"
  },
  listItem: {
    color: "white"
  }
}));

function Dashboard(props) {
  const classes = useStyles();
  const [value] = useState(0);
  const [component, setComponent] = useState();
  useEffect(() => {
    switch (window.location.pathname) {
      case "/dashboard":
        if (props.user.userType.toLowerCase().includes("admin")) {
          props.getUsers()
          setComponent(<Users userAccounts={props.userAccounts} />);
        } else {
          setComponent(<Browse />);
        }
        break;

      case "/dashboard/profile":
        setComponent(<Profile />);
        break;

      case "/dashboard/favorites":
        setComponent(<Favorites />);
        break;

      case "/dashboard/my-works":
        setComponent(<MyWorks />);
        break;
        
      case "/dashboard/book":
        setComponent(<WorkView />);
        break;
      default:
        break;
    }
  }, [window.location.pathname]);

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
            <>
              <ListItem
                component={Link}
                to="/dashboard"
                className={classes.listItem}
                data-testid="sidebar-browse"
                onClick={() => {setComponent(<Browse />); props.removeSelWork()}}
              >
                <ListItemText primary="Browse" />
              </ListItem>
              <ListItem
                component={Link}
                to="/dashboard/favorites"
                className={classes.listItem}
                data-testid="sidebar-favorites"
                onClick={() => {setComponent(<Favorites />); props.removeSelWork()}}
              >
                <ListItemText primary="Favorites" />
              </ListItem>
            </>
          )}
          {!props.user.userType.toLowerCase().includes("admin") && (
            <ListItem
              component={Link}
              to="/dashboard/profile"
              className={classes.listItem}
              data-testid="sidebar-profile"
              value={<Profile />}
              onClick={() => {setComponent(<Profile />); props.removeSelWork()}}
            >
              <ListItemText primary="My Profile" />
            </ListItem>
          )}

          {props.user.userType.toLowerCase().includes("author") && (
            <ListItem
              component={Link}
              to="/dashboard/my-works"
              className={classes.listItem}
              data-testid="sidebar-works"
              onClick={() => {setComponent(<MyWorks />); props.removeSelWork()}}
            >
              <ListItemText primary="My Works" />
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

export default connect(mapStateToProps, { getUsers, removeSelWork })(Dashboard);

