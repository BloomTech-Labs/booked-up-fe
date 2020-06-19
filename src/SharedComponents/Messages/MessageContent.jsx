import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography"

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