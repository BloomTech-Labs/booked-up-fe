import React, { useState, useEffect } from "react";
import { uploadContent, taskStart } from "../../actions/authorAction";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button, FormControl, Select, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import { sharedPaperStyles } from "../../SharedComponents/materialUIShared";
import { genres } from "../../utils/genres.js";
import ImagePlaceholder from "../../assets/image-placeholder.png";

function UploadModal(props) {
  const classes = sharedPaperStyles();
  const [work, setWork] = useState({
    title: "",
    body: [],
    image: [],
    description: "",
    genre: ""
  });
  const [uploadWork, setUploadWork] = useState({
    title: "",
    img_url: "",
    content_url: "",
    user_id: 0
  });
  const [cloudinary] = useState({
    URL: "https://api.cloudinary.com/v1_1/dzmxxuygs/upload",
    preset: "gcwzl9u1"
  });

  useEffect(() => {
    console.log(props.dev);
    setUploadWork({
      ...uploadWork,
      user_id: props.user.id
    });
  }, []);

  const onSubmit = e => {
    var file = work.body[0];
    var formData = new FormData();
    var imgFile = work.image[0];
    var imgFormData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinary.preset);
    imgFormData.append("file", imgFile);
    imgFormData.append("upload_preset", cloudinary.preset);
    e.preventDefault();
    props.taskStart();
    props.uploadContent(
      props,
      formData,
      imgFormData,
      cloudinary,
      uploadWork,
      work
    );
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
              <p>Cover Art</p>
            </Grid>
            <Grid item xs={6}>
              <input
                type="file"
                accept="image/*"
                id="work-button-preview-file"
                onChange={e => {
                  setWork({ ...work, image: [...e.target.files] });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <p>Cover Art</p>
            </Grid>
            <Grid item xs={6}>
              <input
                type="file"
                accept="image/*"
                id="work-button-preview-file"
                onChange={e => {
                  setWork({ ...work, image: [...e.target.files] });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <p>Cover Art</p>
            </Grid>
            <Grid item xs={6}>
              <input
                type="file"
                accept="image/*"
                id="work-button-preview-file"
                onChange={e => {
                  setWork({ ...work, image: [...e.target.files] });
                }}
              />
            </Grid>
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
              Genre
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="add-genre-label"
                  id="add_genre"
                  name="genre"
                  value={work.genre}
                  onChange={handleChange}
                >
                  {genres.map(genre => (
                    <MenuItem value={genre}>{genre}</MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                <ClipLoader size={50} loading={props.isLoading} />
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
    authorContent: state.authorContent,
    dev: state.dev
  };
};

export default connect(mapStateToProps, { uploadContent, taskStart })(
  UploadModal
);
