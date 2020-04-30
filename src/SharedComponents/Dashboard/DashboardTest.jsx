import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MyWorks from "../../Author/MyWorks/MyWorks";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    marginRight: "-.5em",
    marginLeft: "-.5em"
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
    border: "1px solid black",
    height: "80vh"
  }
}));

export default function DashboardTest(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/dashboard/browse":
        if (value !== 0) setValue(0);
        console.log(value);
        console.log(window.location.pathname);
        break;

      case "/dashboard/content-library":
        if (value !== 1) setValue(1);
        console.log(value);
        console.log(window.location.pathname);
        break;
      case "/dashboard/my-works":
        if (value !== 2) setValue(2);
        console.log(value);
        console.log(window.location.pathname);
        break;
      case "/dashboard/messages":
        if (value !== 3) setValue(3);
        console.log(value);
        console.log(window.location.pathname);
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <div className={classes.container}>
      <div className={classes.dashCon}>
        <Typography variant="h4" className={classes.title}>
          Dashboard
        </Typography>
        <div className={classes.dashboard}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.dashNavCon}
            indicatorColor="primary"
          >
            <Tab
              className={classes.dashNav}
              component={Link}
              to="/dashboard/browse"
              label="Browse"
            />
            <Tab
              className={classes.dashNav}
              component={Link}
              to="/dashboard/content-library"
              label="Content Library"
            />
            <Tab
              className={classes.dashNav}
              component={Link}
              to="/dashboard/my-works"
              label="My Works"
            />
            <Tab
              className={classes.dashNav}
              component={Link}
              to="/dashboard/messages"
              label="My Messages"
            />
          </Tabs>
          <div className={classes.content}>{value === 2 && <MyWorks />}</div>
        </div>
      </div>
    </div>
  );
}
