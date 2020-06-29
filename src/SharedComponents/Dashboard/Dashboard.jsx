import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Users } from "../../Admin/Users";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
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

const drawerWidth = 165;

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
    marginTop: "5em",
    marginBottom: "4.33em",
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    marginTop: "5em",
    backgroundColor: theme.palette.secondary.main
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
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
  const { dashWindow } = props;
  const classes = useStyles();
  const [value] = useState(0);
  const [component, setComponent] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reply, setReply] = useState({})
  const theme = useTheme();

  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
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

  const dashboardDrawer = (
    <div>
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
    </div>
  );
  const container = dashWindow !== undefined ? () => dashWindow().document.body : undefined;

  return (
    <div className={classes.container}>
        <CssBaseline />
        <Hidden smUp implementation="css">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        </Hidden>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, 
              }}
            >
              {dashboardDrawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {dashboardDrawer}
            </Drawer>
          </Hidden>
        </nav>
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

