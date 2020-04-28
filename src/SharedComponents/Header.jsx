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
import image from "../assets/image.jpg"

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
    toolbarMargin: {
        marginBottom: "4em"
      },
    logo: {
        height: "8em",
        width: "12em",
        paddingTop: "2%",
        marginLeft: "5%"
    },
    logoContainer: {
        width: "12%",
        border: "3px solid black",
        borderLeft: 0,
        height: "5em",
        overflow: "hidden",
        padding: 0,
        backgroundColor: "white",
        borderRadius: "0 35px 35px 0px",
        "&:hover": {
            backgroundColor: "white"
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
    const [value, setValue] = useState(0);
    const classes = useStyles();

    const handleChange = (e, value) => {
        setValue(value)
    }

    useEffect(() => {
      
        switch(window.location.pathname) {
          case "/": 
            if(value !== 0) {
              setValue(0)
            }
            break;
          
          case "/browse": 
            if(value !== 1) {
              setValue(1);
            }
            break;
          
          case "/dashboard": 
            if(value !== 2) {
              setValue(2)
            }
            break;
          
          case "/my-works": 
            if(value!=3) {
              setValue(3)
            }
            break;
          
          case "/content-library": 
            if(value !== 4) {
              setValue(4)
            }
          break;
          
          default:
              break;
        }
    }, [value]);
  
return (
    <>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    
                    <Button component={Link} to="/" className={classes.logoContainer} disableRipple>
                        <img alt="Booked Up Logo" src={BookedUpLogo} className={classes.logo}/>
                        <div className={classes.triangle}></div>
                    </Button>
                    <Tabs value={value} className={classes.tabContainer} onChange={handleChange} indicatorColor="primary">
                        <Tab className={classes.tab} component={Link} to="/" label="Home" />
                        <Tab className={classes.tab} component={Link} to="/browse" label="Browse" />
                        <Tab className={classes.tab} component={Link}  to="/dashboard" label="Dashboard" />
                        <Tab className={classes.tab} component={Link} to="/my-works" label="My Works" />
                        <Tab className={classes.tab} component={Link} to="/content-libary" label="Content Library" />
                    </Tabs>
                    <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/signup">
                        Sign Up
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/login">
                        Log In
                    </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}></div>
    </>
)
}