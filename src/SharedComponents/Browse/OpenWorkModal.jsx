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
import { getUser } from "../../actions/agentAction"
import { sharedPaperStyles } from "../materialUIShared";
import { genres } from "../../utils/genres.js";
import ImagePlaceholder from "../../assets/image-placeholder.png";


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
      let work = props.work.id
      props.setContent(user, work)
      setFav(true)
    }

    useEffect(() => {
      props.contentLibrary.map(cl => {
        if(cl.id == props.work.id) (
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
          <Grid item xs={6}>
        <Button
            variant="contained"
            color="secondary"
            className={modalClasses.button}
            onClick={handleSendMessage}
          >
            Message Author
          </Button>
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
  
