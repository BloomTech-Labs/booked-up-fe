import React, { useState } from "react";
//material ui imports
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//redux imports
import { connect } from "react-redux";
//pdf reader imports
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

//component styles
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
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "25em",
    marginTop: "3%"
  },
  button: {
    height: "2.5em"
  }
}));

function Workview(props) {
  const classes = useStyles();
  const [pages, setPages] = useState({ numPages: null, pageNum: 1 });

  //when the file is loaded it sets the number of total pages
  const loadSuccess = ({ numPages }) => {
    setPages({
      ...pages,
      numPages
    });
  };

  //prev/next page button functions
  const prevPage = () => {
    setPages({
      ...pages,
      pageNum: pages.pageNum - 1
    });
  };

  const nextPage = () => {
    setPages({
      ...pages,
      pageNum: pages.pageNum + 1
    });
  };
  return (
    /* Once the user chooses the work to read, it sets the currentwork in state and redirects here where they can read that work. Displays title, author, page buttons, and work */
    <div className={classes.paper}>
      <Typography variant="h5">{props.work.title}</Typography>
      <p>{props.name}</p>
      <div className={classes.buttons}>
        {pages.pageNum != 1 ? (
          <Button variant="contained" color="secondary" onClick={prevPage} className={classes.button}>
            Previous
          </Button>
        ) : (
          <Button variant="contained" color="secondary" disabled className={classes.button}>
            Previous
          </Button>
        )}

        <p>
          Page {pages.pageNum} of {pages.numPages}
        </p>
        {pages.pageNum != pages.numPages ? (
          <Button variant="contained" color="secondary" onClick={nextPage} className={classes.button}>
            Next
          </Button>
        ) : (
          <Button variant="contained" color="secondary" disabled className={classes.button}>
            Next
          </Button>
        )}
      </div>

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
    work: state.currentWork,
    name: state.selectedUser.display_name
  };
};

export default connect(mapStateToProps, {})(Workview);
