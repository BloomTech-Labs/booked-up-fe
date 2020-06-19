import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";


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
    width: "90em"
  }
}));

function Workview(props) {
  const classes = useStyles();
  const [pages, setPages] = useState({ numPages: null, pageNum: 1 });

  const loadSuccess = ({ numPages }) => {
    setPages({
      ...pages,
      numPages
    });
  };
  return (
    <div className={classes.paper}>
      <Typography variant="h5">{props.work.title}</Typography>

      <p>
        Page {pages.pageNum} of {pages.numPages}
      </p>
      <Document file={props.work.content_url} onLoadSuccess={loadSuccess}>
        <Page
          width={1400}
          pageNumber={pages.pageNum}
          className={classes.pageContent}
        />
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
