import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import BookedUpLogo from "../assets/Booked-up-logo.jpg";

function ElevationScroll(props) {
  

    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
   
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    logo: {
        height: "6em",
        
    },
    logoContainer: {
        padding: 0,
        marginTop: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
      },
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "15px",
        marginLeft: "15px",
        marginRight: "15px",
        height: "45px"
    },
}))
export default function Header(props) {
    const classes = useStyles();
return (
    <>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <Button component={Link} to="/" className={classes.logoContainer} disableRipple>
                        <img alt="Booked Up Logo" src={BookedUpLogo} className={classes.logo}/>
                    </Button>
                    <Tabs  className={classes.tabContainer}>
                        <Tab className={classes.tab} component={Link} to="/" label="Home" />
                        <Tab className={classes.tab} component={Link} to="/browse" label="Browse" />
                        <Tab className={classes.tab} component={Link}  to="/dasboard" label="Dashboard" />
                        <Tab className={classes.tab} component={Link} to="/my-works" label="My Works" />
                        <Tab className={classes.tab} component={Link} to="/content-libary" label="Content Library" />
                    </Tabs>
                    <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate">
                        Sign Up
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate">
                        Log In
                    </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    </>
)
}