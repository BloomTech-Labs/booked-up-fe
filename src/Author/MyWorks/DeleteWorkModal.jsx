import React, { useState, useEffect } from "react";
import { delContent, taskStart } from "../../actions/authorAction";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../utils/axiosWithAuth.jsx";
import { useHistory } from "react-router-dom";
import { useStyles } from "../SharedComponents/materialUIShared";

function UploadModal(props) {
  const classes = useStyles();
  const history = useHistory();
  const [work, setWork] = useState(props.work);

  const onDel = e => {
    console.log(work);
    e.preventDefault();
    props.delContent(work);
  };

  return (
    <Card className={classes.paper}>
      <CardHeader title={<Typography variant="h5">New Book</Typography>} />
      <CardContent>
        <p>
          Are you sure you would like to delete? This action can not be
          reversed.
        </p>
        <Button variant="contained" color="secondary" onClick={onDel}>
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.close()}
        >
          Cancel
        </Button>
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

export default connect(mapStateToProps, { delContent })(UploadModal);
