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
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
      },
    navContainer: {
        backgroundColor: theme.palette.info.main,
        display: "flex"
    },
    nav: {
        color: "white"
    }
}))

export default function Footer(props) {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
        
        <BottomNavigation showLabels className={classes.navContainer}>
            <BottomNavigationAction label="Browse"  className={classes.nav}/>
            <BottomNavigationAction label="Support"  className={classes.nav}/>
            <BottomNavigationAction label="Contact Us"  className={classes.nav}/>
            <BottomNavigationAction label="@2020 Booked Up"  className={classes.nav}/>
            <BottomNavigationAction label="Terms of Service"  className={classes.nav}/>
            <BottomNavigationAction label="Privacy Policy"  className={classes.nav}/>
        </BottomNavigation>
        </AppBar>
    )
}