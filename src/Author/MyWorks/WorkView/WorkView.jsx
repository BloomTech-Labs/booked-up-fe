import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Document, Page } from "react-pdf";
import axios from "axios";
import { pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(theme => ({
  paper: {
    margin: 0,
    width: "95%",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 2, 1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  pageContent: {
      width: "90em",
  }
}));

function Workview(props) {
  const classes = useStyles();
  const [pages, setPages] = useState({numPages: null, pageNum: 1})
  const [link, setLink] = useState()

 
  const loadSuccess = ({ numPages }) => {
    setPages({
        ...pages,
      numPages
    });
    
  };
  return (
    <div className={classes.paper}>
      <Typography variant="h5">{props.work.title}</Typography>
      
      <p>Page {pages.pageNum} of {pages.numPages}</p>
        <Document file={props.work.content_url} onLoadSuccess={loadSuccess}>
            <Page width={1400} pageNumber={pages.pageNum} className={classes.pageContent}/>
        </Document>
     
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    work: state.currentWork

  };
};

export default connect(mapStateToProps, {})(Workview);