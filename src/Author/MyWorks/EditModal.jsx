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
import { editContent, taskStart } from "../../actions/authorAction";
//spinner import
import { ClipLoader } from "react-spinners";
//utilities imports
import { genres } from "../../utils/genres.js";

function EditModal(props) {
  const classes = sharedPaperStyles();
  const [work, setWork] = useState({
    id: 0,
    user_id: 0,
    title: "",
    description: "",
    "fantasy": true /*at the current time, genres haven't been completely worked out on the front end but are a required part of editing a work*/
  });
  
  //defaults work on open to current work being edited so you don't have to reedit all information
  useEffect(() => {
    setWork({
      ...work,
      id: props.currentWork.id,
      user_id: props.user.id,
      title: props.currentWork.title,
      description: props.currentWork.description
    });
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    props.taskStart();
    props.editContent(work);
  };

  const handleChange = e => {
    setWork({
      ...work,
      [e.target.name]: e.target.value
    });
    console.log(work);
  };
  return (
    /*Edit modal currently only allows to edit title and description of work. Genre doesn't currently work and defaults to fantasy. */
    <Card className={classes.paper}>
      <CardHeader title={<Typography variant="h5">Edit Book</Typography>} />
      <CardContent>
        <form onSubmit={onSubmit}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              Genre
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="add-genre-label"
                  id="add_genre"
                  value={"fantasy"}
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
              Submit
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
    currentWork: state.currentWork,
    dev: state.dev
  };
};

export default connect(mapStateToProps, { editContent, taskStart })(
  EditModal
);
