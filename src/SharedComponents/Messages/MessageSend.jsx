import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { getUser, sendMessage } from "../../actions/agentAction.js";
import { Button } from "@material-ui/core";

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

    useEffect(() => {
        console.log(props.currentWork)
        props.getUser(props.currentWork.user_id)
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
        console.log(props.currentWork)
        console.log(message)
        let sendingMessage = {
            subject: message.subject,
            body: message.body,
            sender_id: props.user.id,
            recipient_id: props.currentWork.user_id
        }
        props.sendMessage(sendingMessage)
    }
    return(
        <form onSubmit={handleSubmit}> 
            <Typography variant="h4">Re: {props.currentWork.title}</Typography>
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
        <Button type="submit" className={classes.button}>Send</Button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
      user: state.user,
      isLogged: state.isLogged,
    };
  };
  
  export default connect(mapStateToProps, { getUser, sendMessage })(MessageSend);
  