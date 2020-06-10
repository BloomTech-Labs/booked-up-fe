import React, { useState } from "react";
import { delContent } from "../../actions/authorAction";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { sharedPaperStyles } from "../../SharedComponents/materialUIShared";

function UploadModal(props) {
  const classes = sharedPaperStyles();
  const [work] = useState(props.work);

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
