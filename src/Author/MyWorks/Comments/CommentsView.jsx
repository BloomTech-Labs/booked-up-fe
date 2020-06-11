import React from 'react';
import Grid from "@material-ui/core/Grid";
import Comment from "./Comment.jsx"
function CommentsView(props) {
    return (
        <Grid container alignItems="center">
          {props.comments.map((item) => (
            <Comment comment={item} />
          ))}
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
      user: state.user,
      isLogged: state.isLogged,
      currentWork: state.currentWork,
      comments: state.comments
    };
  };
  
  export default connect(mapStateToProps, {})(CommentsView);