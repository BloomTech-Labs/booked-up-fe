import React, { useState, useEffect } from "react";
//material ui styles
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { sharedPaperStyles } from "../materialUIShared";
//redux and action imports
import { setWork } from "../../actions/authorAction";
import { connect } from "react-redux";
import { setContent } from "../../actions/fanAction"
import { getUser } from "../../actions/agentAction"
//utility and asset imports
import { genres } from "../../utils/genres.js";
import ImagePlaceholder from "../../assets/image-placeholder.png";

//component styles
const useModalStyles = makeStyles(theme => ({
  image: {
    position: "relative",
    backgroundSize: "100% 100%",
    width: "100%",
    marginBottom: "2%"
  },
  button: {
    marginLeft: "6%"
  }
})) 
function OpenWorkModal(props) {
  const classes = sharedPaperStyles();
  const modalClasses = useModalStyles();
  const [fav, setFav] = useState(false)
  
  const handleFavClick = () => {
      let user = props.user.id
      let work = props.work.author_content_id
      props.setContent(user, work)
      setFav(true)
    }
    //checks if work is already in your favorites and disables button if it is
  useEffect(() => {
      props.contentLibrary.map(cl => {
        if(cl.id == props.work.author_content_id) (
          setFav(true)
        )
      })
      }, [props.work])
  const handleReadClick = () => {
    props.setWork(props.work);
    window.location.replace(`/dashboard/book`);
  };
  const handleSendMessage = () => {
    props.setWork(props.work)
    window.location.replace(`/messages`)
  };
  /*Makes the background image either the image uploaded by the author or a placeholder image*/
  const imageSet = (work) => {
    if(work.img_url) {
      return (
        work.img_url
      )
    }
    else {
      return (
        ImagePlaceholder
      )
    }
  }
  return (
    /*Displays title, author, cover art, and allows the chance to add to favorites, read, or message author if the usertype is agent. Message author sets the user as selecteduser and the work as currentwork and redirects to messagesend component.*/
    <Card className={classes.paper}>
      <CardHeader
        title={<Typography variant="h5">{props.work.title}</Typography>}
      />
      <CardContent>
        <Grid container alignItems="center">
          <Grid item xs={6}>
  <p>by {props.selectedUser.display_name}</p>
          </Grid>
          <Grid item xs={6}>
        {(props.user.userType === "agent") || (props.user.userType === "admin") ? (<Button
            variant="contained"
            color="secondary"
            className={modalClasses.button}
            onClick={handleSendMessage}
          >
            Message Author
          </Button>) : null}
          </Grid>
          <Grid item xs={12}>
            <img src={imageSet(props.work)} className={modalClasses.image}/>
          </Grid>
          <Grid item xs={12}>
            <p>{props.work.description}</p>
          </Grid>
            {fav === false && (<Button variant="contained" className={modalClasses.button} color="secondary" onClick={handleFavClick}>
              Add to Favorites
            </Button>)}
            {fav === true && (<Button variant="contained" className={modalClasses.button} disabled color="secondary">
            &#10004; Added to Favorites
          </Button>)}
          <Button
            variant="contained"
            color="secondary"
            className={modalClasses.button}
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
      contentLibrary: state.contentLibrary,
      selectedUser: state.selectedUser
    };
  };
  
  export default connect(mapStateToProps, { setWork, setContent, getUser })(OpenWorkModal);
  
