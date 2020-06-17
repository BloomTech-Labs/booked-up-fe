import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { setWork } from "../../actions/authorAction";
import { connect } from "react-redux";
import { setContent } from "../../actions/fanAction"
import { sharedPaperStyles } from "../materialUIShared";
import { genres } from "../../utils/genres.js";

function OpenWorkModal(props) {
  const classes = sharedPaperStyles();
  const [fav, setFav] = useState(false)
    const handleFavClick = () => {
      let user = props.user.id
      let work = props.work.id
      props.setContent(user, work)
      setFav(true)
    }

    useEffect(() => {
      console.log(props.contentLibrary)
      props.contentLibrary.map(cl => {
        if(cl.author_content_id == props.work.id) (
          setFav(true)
        )
      })
      }, [props.work])
  const handleReadClick = () => {
    props.setWork(props.work);
    window.location.replace(`/dashboard/book/`);
  };
  return (
    <Card className={classes.paper}>
      <CardHeader
        title={<Typography variant="h5">{props.work.title}</Typography>}
      />
      <CardContent>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <p>Author</p>
          </Grid>
          <Grid item xs={6}>
            <p>Image</p>
          </Grid>
            {fav === false && (<Button variant="contained" color="secondary" onClick={handleFavClick}>
              Add to Favorites
            </Button>)}
            {fav === true && (<Button variant="contained" disabled color="secondary">
            &#10004; Added to Favorites
          </Button>)}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReadClick}
          >
            Read Now
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => {
    return {
      user: state.user,
      isLogged: state.isLogged,
      currentWork: state.currentWork,
      contentLibrary: state.contentLibrary
    };
  };
  
  export default connect(mapStateToProps, { setWork, setContent })(OpenWorkModal);
  
