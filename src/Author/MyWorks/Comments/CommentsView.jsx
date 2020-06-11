import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Comment from "./Comment.jsx"
function CommentsView(props) {
  const [comments, setComments] = useState(props.comments)

  useEffect(() => {
    console.log(props.comments)
  }, [])

    return (
        <>
        </>
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