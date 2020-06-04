import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footerContainer: {
    marginBottom: 0
  },
  footer: {
    backgroundColor: theme.palette.secondary.dark,
    width: "100%"
  },
  toolBar: {
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
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
      <footer className={classes.footerContaier}>
        <Toolbar className={classes.toolBar}>
          <BottomNavigation showLabels className={classes.navContainer}>
            <BottomNavigationAction label="Support" className={classes.nav} />;
            <BottomNavigationAction label="Browse" className={classes.nav} />
            <BottomNavigationAction label="Support" className={classes.nav} />
            <BottomNavigationAction
              label="Contact Us"
              className={classes.nav}
            />
          </BottomNavigation>
          <BottomNavigation showLabels className={classes.navContainer}>
            <BottomNavigationAction
              label="@2020 Booked Up"
              className={classes.nav}
            />
            <BottomNavigationAction
              label="Terms of Service"
              className={classes.nav}
            />
            <BottomNavigationAction
              label="Privacy Policy"
              className={classes.nav}
            />
          </BottomNavigation>
        </Toolbar>
      </footer>
    </>
  );
}
