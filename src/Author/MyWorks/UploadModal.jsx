import React, { useState, useEffect } from "react";
import { uploadContent, taskStart } from "../../actions/authorAction";
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
import { ClipLoader } from "react-spinners";

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

function UploadModal(props) {
  const classes = useStyles();
  const [work, setWork] = useState({ title: "", body: [], description: "" });
  const history = useHistory();
  const [uploadWork, setUploadWork] = useState({
    title: "",
    content_url: "",
    user_id: 0
  });
  const [cloudinary] = useState({
    URL: "https://api.cloudinary.com/v1_1/dzmxxuygs/upload",
    preset: "gcwzl9u1"
  });

  useEffect(() => {
    setUploadWork({
      ...uploadWork,
      user_id: props.user.id
    });
  }, []);

  const onSubmit = e => {
    var file = work.body[0];
    var formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinary.preset);
    e.preventDefault();
    props.taskStart();
    props.uploadContent(props, formData, cloudinary, uploadWork, work);
  };

  const handleChange = e => {
    setWork({
      ...work,
      [e.target.name]: e.target.value
    });
    console.log(work);
  };
  return (
    <Card className={classes.paper}>
      <CardHeader title={<Typography variant="h5">New Book</Typography>} />
      <CardContent>
        <form onSubmit={onSubmit}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <p>Upload your work</p>
            </Grid>
            <Grid item xs={6}>
              <input
                type="file"
                accept="application/pdf"
                id="work-button-file"
                onChange={e => {
                  setWork({ ...work, body: [...e.target.files] });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <p>Title</p>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="title"
                id="title"
                value={work.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <p>Description</p>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="description"
                id="description"
                multiline
                rows={4}
                variant="outlined"
                className={classes.description}
                value={work.description}
                onChange={handleChange}
              />
            </Grid>
            {props.isLoading === true && (
              <Grid item xs={12}>
                <ClipLoader 
                size={50}
                loading={props.isLoading}
              />
              </Grid>
            )}
            <Button type="submit" variant="contained" color="secondary">
              Upload
            </Button>
            
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    isLoading: state.isLoading,
    authorContent: state.authorContent
  };
};

export default connect(mapStateToProps, { uploadContent, taskStart })(UploadModal);
