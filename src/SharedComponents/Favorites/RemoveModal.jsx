import React, { useState } from "react";
import { removeContent } from "../../actions/fanAction";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { sharedPaperStyles } from "../../SharedComponents/materialUIShared";
import { taskStart } from "../../actions/authorAction"
import { ClipLoader } from "react-spinners";
function UploadModal(props) {
  const classes = sharedPaperStyles();
  const [work] = useState(props.work);

  const handleRemove = () => {
    console.log(props.work)
    props.taskStart();
    let data = {
      id: props.user.id,
      contentId: props.work.author_content_id
    }
    props.removeContent(data)
    }

  return (
    <Card className={classes.paper}>
      <CardHeader title={<Typography variant="h5">Remove Book</Typography>} />
      <CardContent>
        <p>
          Are you sure you would like to remove this from your favorites?
        </p>
        <Button style={{marginRight: "3%"}} variant="contained" color="secondary" onClick={handleRemove}>
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

export default connect(mapStateToProps, { removeContent, taskStart })(UploadModal);
