import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "../../utils/PrivateRoute.jsx";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Drawer from "@material-ui/core/Drawer"
import Portal from "@material-ui/core/Portal";
import MyWorks from "../../Author/MyWorks/MyWorks";
import Browse from "../Browse/Browse.jsx";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    
  },
  
  container: {
    marginRight: "-.5em",
    marginLeft: "-.5em"
  },
  drawerPaper: {
    backgroundColor: theme.palette.secondary.light,
    color: "white",
    borderRight: "1px solid black",
    marginTop: "4.34em",
    marginBottom: "4.33em",
    height: "83.9vh",
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
    marginTop: "5%",
    width: "80%",
    marginLeft: "15%",
    marginBottom: "15%"
  },
  listItem: {
    color: "white"
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [component, setComponent] = useState("");

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/dashboard/browse":
        if (value !== 0) {
          setValue(0);
        }
        setComponent(<Browse />);
        break;

      case "/dashboard/content-library":
        if (value !== 1) {
          setValue(1);
        }
        setComponent(<p>Content Library</p>);
        break;

      case "/dashboard/my-works":
        if (value !== 2) {
          setValue(2);
        }
        setComponent(<MyWorks />);
        break;

      case "/dashboard/messages":
        if (value !== 3) {
          setValue(3);
        }
        setComponent(<p>My Messages</p>);
        break;

      case "/dashboard/messages":
        if (value !== 3) {
          setValue(3);
        }
        setComponent(<p>My Messages</p>);
        break;

      default:
        break;
    }
  }, [value]);

  return (
    // <div className={classes.container}>
    //   <div className={classes.dashCon}>
    //     <Typography variant="h4" className={classes.title}>
    //       Dashboard
    //     </Typography>
    //     <div className={classes.dashboard}>
    //       <Tabs
    //         value={value}
    //         onChange={handleChange}
    //         className={classes.dashNavCon}
    //         indicatorColor="primary"
    //       >
    //         <Tab
    //           className={classes.dashNav}
    //           component={Link}
    //           to="/dashboard/browse"
    //           label="Browse"
    //         />
    //         <Tab
    //           className={classes.dashNav}
    //           component={Link}
    //           to="/dashboard/content-library"
    //           label="Content Library"
    //         />
    //         <Tab
    //           className={classes.dashNav}
    //           component={Link}
    //           to="/dashboard/my-works"
    //           label="My Works"
    //         />
    //         <Tab
    //           className={classes.dashNav}
    //           component={Link}
    //           to="/dashboard/messages"
    //           label="My Messages"
    //         />
    //       </Tabs>
    //       <div className={classes.content}>{component}</div>
    //     </div>
    //   </div>
    // </div>

    <div className={classes.container}>
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List onClick={handleChange}>
          {/* {['Browse', 'Favorites', 'My Works'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              {/* <ListItemText primary={text} />
            </ListItem>
          // ))} */}
          <ListItem component={Link} to="/dashboard/browse" className={classes.listItem}>
            <ListItemText  primary="Browse" />
          </ListItem>
          <ListItem component={Link} to="/dashboard/content-library" className={classes.listItem}>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem component={Link} to="/dashboard/my-works" className={classes.listItem}>
            <ListItemText primary="My Works" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <div className={classes.content}>{component}</div>
      </div>
  );
}
