import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { genreData } from "../../../../genre";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function Genre(props) {
  const [genre, setGenre] = useState(genreData.state);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    genre.map(gen => setChecked({ ...checked, [gen.FriendlyName]: false }));
  }, []);

  const handleChange = event => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
    console.log(checked);
  };

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
