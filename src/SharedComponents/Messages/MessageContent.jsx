import React from "react";
import Typography from "@material-ui/core/Typography"

export default function MessageContent(props) {

    return (
        <>
        <Typography paragraph>
            {props.message.content}
          </Typography>
          </>
    )
}