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
    marginRight: "15em"
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

  // useEffect(() => {
  //   switch (window.location.pathname) {
  //     case "/":
  //       if (value !== 0) {
  //         setValue(0);
  //       }
  //       break;

  //     case "/browse":
  //       if (value !== 1) {
  //         setValue(1);
  //       }
  //       break;

  //     case "/dashboard":
  //       if (value !== 0) {
  //         setValue(0);
  //       }
  //       break;

  //     // case "/messages":
  //     //   if (value !== 3) {
  //     //     setValue(3);
  //     //   }
  //     //   break;

  //     // case "/account-settings":
  //     //   if (value !== 4) {
  //     //     setValue(4);
  //     //   }
  //     //   break;

  //     default:
  //       break;
  //   }
  // }, [value]);

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
                    to="/dashboard/"
                    label="Dashboard"
                  />
                <Tab
                className={classes.tab}
                component={Link}
                to="/messages"
                label={<MessageIcon/>}
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
              <MenuItem component={Link} to="/dashboard/profile">
                <AccountCircleIcon />
              </MenuItem>

              <MenuItem component={Link} to="/account-settings">
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

export default connect(mapStateToProps, { userLogout })(Header);
