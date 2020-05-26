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
    position: "absolute",
    left: "35%",
    top: "20%",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Workview(props) {
  const classes = useStyles();
  const [pages, setPages] = useState({numPages: null, pageNum: 1})
  const [work, setWork] = useState()

  useEffect(() => {
      console.log(props.work.content_url)
      axios
        .get(props.work.content_url)
        .then(res => {
            setWork(res)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
  }, [])

  const loadSuccess = ({ numPages }) => {
    setPages({
      numPages
    });
    
  };
  return (
    <Card className={classes.paper}>
      <CardHeader title={<Typography variant="h5">{props.work.title}</Typography>} />
      <CardContent>
        <Document file={work} onLoadSuccess={loadSuccess}>
            <Page pageNumber={pages.pageNum} />
        </Document>
        
        <p>Page {pages.pageNum} of {pages.numPages}</p>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    authorContent: state.authorContent
  };
};

export default connect(mapStateToProps, {})(Workview);