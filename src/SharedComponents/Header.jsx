import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import BookedUpLogo from "../assets/new-logo.jpg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MessageIcon from "@material-ui/icons/Message";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogout } from "../actions/authenticationAction";
import { useEffect } from "react";
import { removeSelWork } from "../actions/userAction";


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    marginBottom: "4em"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    height: "8em",
    width: "100%",
    paddingTop: "2%",
    marginLeft: "1%"
  },
  logoContainer: {
    width: "12%",
    border: "1px solid silver",
    borderLeft: 0,
    height: "5em",
    overflow: "hidden",
    padding: 0,
    backgroundColor: "Silver",
    borderRadius: "0 35px 35px 0",
    boxShadow: "0 0 0.3rem 0.2rem LightGrey"
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  loggedTab: {
    marginRight: "5em"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    height: "45px"
  },

  blankTab: {
    border: "1px solid black",
    height: "20px"
  },
  menuTab: {
    border: "1px solid black",
    height: "13.5%",
    width: "11em"
  }
}));

function Header(props) {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const logout = () => {
    setAnchorEl(null);
    setOpen(false);
    localStorage.clear();
    props.userLogout();
    history.push("/");
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleRemove = e => {
    setAnchorEl(null);
    setOpen(false);
    props.removeSelWork()
  }
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters className={classes.toolbar}>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
              onClick={handleRemove}
            >
              <img
                alt="Booked Up Logo"
                src={BookedUpLogo}
                className={classes.logo}
              />
              <div className={classes.triangle}></div>
            </Button>
            <Tabs
              value={value}
              className={classes.tabContainer}
              onChange={handleChange}
              indicatorColor="primary"
            >
              {props.isLogged ? (
                <div className={classes.loggedTab}>
                  <Tab
                    className={classes.tab}
                    component={Link}
                    to="/dashboard"
                    label="Dashboard"
                    onClick={handleRemove}
                  />
                <Tab
                className={classes.tab}
                component={Link}
                to="/messages"
                label={<MessageIcon/>}
                onClick={handleRemove}
              />
                  <Tab
                    aria-owns={anchorEl ? "account-menu" : undefined}
                    aria-haspopup={anchorEl ? "true" : undefined}
                    className={classes.tab}
                    onClick={e => handleClick(e)}
                    label={<AccountCircleIcon />}
                  />
                </div>
              ) : (
                <div>
                  <Tab
                    className={classes.tab}
                    component={Link}
                    to="/"
                    label="Home"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    component={Link}
                    to="/signup"
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    component={Link}
                    to="/login"
                  >
                    Log In
                  </Button>
                </div>
              )}
            </Tabs>
            <Menu
              id="account-menu"
              classes={{ paper: classes.menuTab }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              // elevation={0}
            >
              <MenuItem component={Link} to="/dashboard/profile" onClick={handleRemove}>
                <AccountCircleIcon />
              </MenuItem>
              
                <MenuItem component={Link} to="/settings" onClick={handleRemove}>
                  Account Settings
                </MenuItem>            

              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged
  };
};

export default connect(mapStateToProps, { userLogout, removeSelWork })(Header);
