import React from 'react';
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
function AddComment(props) {
    const [value, setValue] = useState("");

    const handleComment = e => {
        e.preventDefault();
        setValue(e.target.value);
        console.log(value);
      };
    return (
        <>
            <TextField
                id="add-comment"
                label="Add Comment"
                value={value}
                onChange={handleComment}
            />
            <Button className={classes.button} onClick={handleSubmit}>
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
  
  export default connect(mapStateToProps, {})(AddComment);