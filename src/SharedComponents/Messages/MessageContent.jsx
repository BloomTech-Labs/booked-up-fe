import React, {useEffect} from "react";
import Typography from "@material-ui/core/Typography"
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

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
        <>
        {props.message.subject && (<div className={classes.headContainer}>
        <Typography variant="h5" >
              From: {props.user.display_name}
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