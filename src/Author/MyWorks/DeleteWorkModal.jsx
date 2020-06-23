import React, { useState, useEffect } from "react";
import { delContent, taskStart, delContentNoImg } from "../../actions/authorAction";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { sharedPaperStyles } from "../../SharedComponents/materialUIShared";
import { ClipLoader } from "react-spinners";
function UploadModal(props) {
  const classes = sharedPaperStyles();
  const [work] = useState(props.work);

  const onDel = e => {
    console.log(work)
    props.taskStart();
    if(work.img_public_id) {
      props.delContent(work);
    }
    else {
      props.delContentNoImg(work)
    }
  };

  return (
    <Card className={classes.paper}>
      <CardHeader title={<Typography variant="h5">New Book</Typography>} />
      <CardContent>
        <p>
          Are you sure you would like to delete? This action can not be
          reversed.
        </p>
        <Button  style={{marginRight: "3%"}} variant="contained" color="secondary" onClick={onDel}>
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.close()}
        >
          Cancel
        </Button>
        <div>
        {props.isLoading === true && (
               <ClipLoader size={20} loading={props.isLoading} />
              )}
              </div>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    authorContent: state.authorContent,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { delContent, taskStart, delContentNoImg })(UploadModal);
