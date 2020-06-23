import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { genreData } from "../../../../genre";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { sharedPaperStyles } from "../../../../SharedComponents/materialUIShared";

export default function Genre(props) {
  const [genres, setGenres] = useState(genreData.state);
  const [checked, setChecked] = useState([]);
  const classes = sharedPaperStyles();
  // useEffect(() => {
  //   genre.map(gen => setChecked({ ...checked, [gen.FriendlyName]: false }));
  // }, []);

  // const handleChange = event => {
  //   setChecked({ ...checked, [event.target.name]: event.target.checked });
  //   console.log(checked);
  // };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Autocomplete
          multiple
          id="checkboxes-genre"
          options={genres}
          onChange={props.handleGenreChange}
          disableCloseOnSelect
          getOptionLabel={option => option.FriendlyName}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox checked={selected} />
              {option.FriendlyName}
            </React.Fragment>
          )}
          style={{ width: 450 }}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              label="Genres"
              placeholder=""
            />
          )}
        />
      </FormControl>
      {/*))} */}
    </div>
  );
}
