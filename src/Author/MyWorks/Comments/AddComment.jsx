import React, { useState } from 'react';
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { addComment } from "../../../actions/fanAction";

function AddComment(props) {
    const [data, setData] = useState({author_content_id: props.currentWork.id, user_id: props.user.id, comment: ""})
    const handleComment = e => {
        e.preventDefault();
        setData({...data, comment: e.target.value});
      };
    const handleSubmit = e => {
        console.log(data)
        props.addComment(data)
    }
    return (
        <>
            <TextField
                id="add-comment"
                label="Add Comment"
                value={data.comment}
                onChange={handleComment}
            />
            <Button onClick={handleSubmit}>
            Add
            </Button>
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
  
  export default connect(mapStateToProps, {addComment})(AddComment);