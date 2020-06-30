import React, { useState, useEffect } from 'react'
//material ui imports
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
//redux and action imports
import { connect } from "react-redux";
import { getUser, sendMessage } from "../../actions/agentAction.js";
import { taskStart } from "../../actions/authorAction.js";
//loading spinner import
import { ClipLoader } from "react-spinners";

//component styles
const useStyles = makeStyles((theme) => ({
    message: {
        width: "100%", 
        marginBottom: "1%"
    },
    button: {
        marginLeft: "93%",
        border: "1px solid grey"
    }
}))
function MessageSend(props) {
    const classes = useStyles();
    const [user, setUser] = useState({})
    const [message, setMessage] = useState({subject: "", body: ""})

    /*checks if message being sent is a reply and if so sets the current subject to the current work so subject displays as Re: MessageSubject*/
    useEffect(() => {
        if(props.type === "reply") {
            setMessage({...message, subject: props.currentWork.subject})
        }
        props.getUser(props.currentWork.id)
    }, [])

    const handleChange = e => {
        e.preventDefault();
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.taskStart();
        console.log(props.currentWork)
        if(props.type === "reply") {
            let sendingMessage = {
                subject: message.subject,
                body: message.body,
                sender_id: props.user.id,
                recipient_id: props.currentWork.user_id,
                recipient: props.selectedUser.display_name,
                linking_id: props.currentWork.id
                //linkingid meant to allow for conversation threads
            }
            console.log(sendingMessage)
            props.sendMessage(sendingMessage)
         } else {
            let sendingMessage = {
                subject: message.subject,
                body: message.body,
                sender_id: props.user.id,
                recipient_id: props.currentWork.user_id,
                recipient: props.selectedUser.display_name
            }
            console.log(sendingMessage)
            props.sendMessage(sendingMessage)
        }
        
    }
    return(
        <form onSubmit={handleSubmit}> 
            <Typography variant="h5">To: {props.selectedUser.display_name}</Typography>
            <TextField
          id="message-subject"
          variant="outlined"
          name="subject"
          value={message.subject}
          className={classes.message}
          onChange={handleChange}
        />
            <TextField
          id="message"
          multiline
          rows={25}
          variant="outlined"
          name="body"
          value={message.body}
          className={classes.message}
          onChange={handleChange}
        />
        <div><Button type="submit" className={classes.button}>Send</Button>
        {props.isLoading === true && (
               <ClipLoader size={20} loading={props.isLoading} />
              )}
        </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
      user: state.user,
      isLogged: state.isLogged,
      selectedUser: state.selectedUser,
      error: state.error,
      isLoading: state.isLoading
    };
  };
  
  export default connect(mapStateToProps, { getUser, sendMessage, taskStart })(MessageSend);
  
