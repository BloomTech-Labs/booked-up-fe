import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
        marginBottom: "4em"
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolBar: {
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  navContainer: {
    backgroundColor: theme.palette.secondary.dark,
    height: "1%",
    width: "50%",
    display: "flex",
    alignItems: "flex-start"
  },
  nav: {
    color: "white",
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "1%"
  },
  div: {
    color: "white",
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "1.5%"
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <>

    <div className={classes.toolbarMargin}></div>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <BottomNavigation showLabels className={classes.navContainer}>
            <BottomNavigationAction label="Browse" className={classes.nav} />
            <BottomNavigationAction label="Support" className={classes.nav} />
            <BottomNavigationAction label="Contact Us" className={classes.nav} />
          </BottomNavigation>
          <BottomNavigation showLabels className={classes.navContainer}>
            <BottomNavigationAction
              label="@2020 Booked Up"
              className={classes.nav}
            />
            <p className={classes.div}>|</p>
            <BottomNavigationAction
              label="Terms of Service"
              className={classes.nav}
            />
            <p className={classes.div}>|</p>
            <BottomNavigationAction
              label="Privacy Policy"
              className={classes.nav}
            />
          </BottomNavigation>
        </Toolbar>
      </AppBar>
    </>
  );
}
