import React from "react";
import Typography from "@material-ui/core/Typography"
import { Button } from "@material-ui/core";

export default function MessageContent(props) {
    return (
        <>
        <Typography variant="h3">{props.message.subject}</Typography>
        <Typography paragraph>
            {props.message.body}
          </Typography>
          </>
    )
}