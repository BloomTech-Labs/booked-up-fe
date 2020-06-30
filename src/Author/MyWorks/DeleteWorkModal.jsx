import React, { useState } from "react";
//material ui imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
import { sharedPaperStyles } from "../../SharedComponents/materialUIShared";
//redux and action imports
import { connect } from "react-redux";
import { delContent, taskStart, delContentNoImg } from "../../actions/authorAction";
//loading spinner import
import { ClipLoader } from "react-spinners";

function UploadModal(props) {
  const classes = sharedPaperStyles();
  const [work] = useState(props.work);
  /*delete function checks if there's a cover image and either goes to action appropriate.*/
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
    /*Modal on clicking delete that asks to confirm if that's really what you want to do*/
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
