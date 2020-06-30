import React, { useState, useEffect } from "react";
//material ui imports
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button, FormControl, Select, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { sharedPaperStyles } from "../../SharedComponents/materialUIShared";
//redux and action imports
import { connect } from "react-redux";
import { uploadContent, taskStart } from "../../actions/authorAction";
//spinner import
import { ClipLoader } from "react-spinners";
//utilities imports
import { genres } from "../../utils/genres.js";


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
  //cloudinary presets
  const [cloudinary] = useState({
    URL: "https://api.cloudinary.com/v1_1/dzmxxuygs/upload",
    preset: "gcwzl9u1"
  });

  //sets the user id of upload work
  useEffect(() => {
    setUploadWork({
      ...uploadWork,
      user_id: props.user.id
    });
  }, []);

  const onSubmit = e => {
    //attaches file and cover image to forms as part of cloudinary file to be uploaded
    var file = work.body[0];
    var formData = new FormData();
    var imgFile = work.image[0];
    var imgFormData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinary.preset);
    imgFormData.append("file", imgFile);
    imgFormData.append("upload_preset", cloudinary.preset);
    e.preventDefault();
    //calls action to upload to cloudinary and add url to backend
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
    /*Upload work asks for cover art(img file), work(pdf file), title, and description. Genre doesn't currently work on front end. Work file and title are required. */
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
