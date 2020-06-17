import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { genreData } from "../../../../genre";
// import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// const useStyles = makeStyles(theme => ({}));

export default function Genre(props) {
  const [genre, setGenre] = useState(genreData.state);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    genre.map(gen => setChecked({ ...checked, [gen.FriendlyName]: false }));
    console.log("NL: Genre.jsx: Genre: useEffect: ", checked);
  }, []);

  const handleChange = event => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
    console.log(checked);
    //props.handleGenreChange(checked);
  };

  // const classes = useStyles();
  // let index = 0;

  return (
    <div>
      {genre.map(gen => (
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              name={gen.FriendlyName}
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
