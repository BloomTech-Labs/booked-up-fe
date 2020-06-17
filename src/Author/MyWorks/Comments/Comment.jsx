import React from 'react'
import Grid from "@material-ui/core/Grid";
export default function Comment(props) {
    
return(
    <Grid item xs={6}>
        {props.comment.comment}
    </Grid>
    )
}