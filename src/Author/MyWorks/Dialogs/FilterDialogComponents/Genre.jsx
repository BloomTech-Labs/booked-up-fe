import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { genreData } from "../../../../genre";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

const useStyles = makeStyles(theme => ({}));

export default function Genre(props) {
  const [genre, setGenre] = useState(genreData.state);
  const handleChange = event => {};

  const lastRow = genre.length % 4;

  console.log(genre.length);
  console.log(Math.ceil(genre.length / 8));

  const classes = useStyles();
  let index = 0;

  return (
    <div>
      {genre.map(gen => (
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label={gen.FriendlyName}
        />
      ))}
    </div>
  );
}
