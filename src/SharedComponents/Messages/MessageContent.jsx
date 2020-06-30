import React from "react";
//material ui imports
import Typography from "@material-ui/core/Typography"
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//redux import
import { connect } from "react-redux";

//component styles
const useStyles = makeStyles(theme => ({
    headContainer: {
        borderBottom: "1px solid black",
        marginBottom: '1%'
    },
    button: {
        height: "2em",
        marginTop: ".5%",
        marginBottom: "1%"
    },
    body: {
        border: "1px solid grey",
        height: "30em",
        padding: "1%",
        borderRadius: "5px"
    }
  }));
export default function MessageContent(props) {
    const classes = useStyles();
    return (
        /*Content of message received. Props received are message, handlereplymessage, and user. Currently experiencing problem receiving user data but originally typography contains `From: ${props.user.display_name}` */
        <>
        {props.message.subject && (<div className={classes.headContainer}>
        <Typography variant="h5" >
              
            </Typography>
        <Typography variant="h5">Subject: {props.message.subject}</Typography>
        <Button variant="contained"
                    color="secondary" className={classes.button} onClick={() => props.handleReplyMessage(props.message)}>Reply</Button></div>)}
        
        {props.message.body && (<Typography paragraph className={classes.body}>
            {props.message.body}
          </Typography>)}
          </>
    )
}
