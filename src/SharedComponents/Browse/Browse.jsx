import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { data } from "../../data.js";

const content_library = data.author_works;

const useStyles = makeStyles(theme => ({
  searchContainer: {
    padding: "1%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  searchBar: {
    width: "25%",
    marginRight: "1%",
    marginLeft: "2%"
  },
  formControl: {
    marginLeft: ".5%"
  },
  filter: {
    border: "1px solid black",
    width: "6em",
    paddingLeft: "5%"
  },
  worksContainer: {
    border: "1px solid black",
    width: "85%",
    height: "22.5%",
    margin: "auto",
    padding: 0,
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden"
  },
  title: {
    marginLeft: "2%"
  },
  button: {
    ...theme.typography.estimate,
    padding: ".275em",
    borderRadius: 0,

    border: "1px solid black",
    marginLeft: "1%",
    backgroundColor: theme.palette.secondary.main,
    color: "white"
  },
  featuredContainer: {
    width: "80%",
    height: "30%",
    margin: "auto"
  },
  bottomMargin: {
    marginBottom: "3em"
  },
  resultsContainer: {
    width: "95%",
    margin: "auto"
  },
  placeholderImage: {
    position: "relative",
    backgroundColor: "grey",
    textAlign: "center",
    color: "white",
    height: "11.25em",
    width: "100%",
    border: "1px solid black"
  },
  works: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    alignItems: "center",
    border: "1px solid black",
    width: "100%",
    height: "11.25em",
    opacity: "0",
    "&:hover": {
      transparency: "0%",
      opacity: ".5",
      border: "1px dashed white"
    }
  },
  work: {
    width: "90%",
    margin: "auto"
  },
  prev: {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    width: "auto",
    marginTop: "-22px",
    padding: "16px",
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "3px 0 0 3px",
    userSelect: "none",
    zIndex: 1
  },
  next: {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    width: "auto",
    marginTop: "-22px",
    padding: "16px",
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "3px 0 0 3px",
    userSelect: "none",
    right: 0
  },
  workContainer: {
    width: "30em",
    display: "flex",
    border: "1px solid black"
  },
  results: {
    marginBottom: "5%"
  }
}));

export default function Browse(props) {
  const [works, setWorks] = useState([{ id: 0, title: "", description: "" }]);
  const [filter, setFilter] = useState("all");
  const [value, setValue] = useState("");
  const [filteredWork, setFilteredWork] = useState();
  const classes = useStyles();

  const handleSearch = e => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(value);
  };

  const handleChange = e => {
    e.preventDefault();
    setFilter(e.target.value);
    console.log(filter);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFilteredWork(
      content_library.filter(work => {
        if (filter === "all") {
          return (
            work.title.toLowerCase().includes(value.toLowerCase()) ||
            work.description.toLowerCase().includes(value.toLowerCase()) ||
            /*work.genre.toLowerCase().includes(value.toLowerCase()) ||*/
            work.author.toLowerCase().includes(value.toLowerCase())
          );
        } else {
          return work[`${filter}`].toLowerCase().includes(value.toLowerCase());
        }
      })
    );
    console.log(filteredWork);
  };
  return (
    <>
      <div className={classes.searchContainer}>
        <TextField
          id="standard-search"
          label="Search"
          type="search"
          value={value}
          onChange={handleSearch}
          className={classes.searchBar}
        />
        <FormControl className={classes.formControl}>
          <Select
            labelId="search-filter-label"
            id="search-filter"
            className={classes.filter}
            value={filter}
            onChange={handleChange}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"title"}>Title</MenuItem>
            <MenuItem value={"author"}>Author</MenuItem>
            <MenuItem value={"genre"}>Genre</MenuItem>
          </Select>
        </FormControl>
        <Button className={classes.button} onClick={handleSubmit}>
          Go
        </Button>
      </div>
      <h2 className={classes.title}>Featured</h2>

      <Carousel
        autoPlay={10000}
        animationSpeed={2000}
        infinite
        centered
        dots
        className={classes.featuredContainer}
      >
        {content_library.map((cl, i) => (
          <div key={i} className={classes.placeholderImage}>
            <div className={classes.works}>
              <p className={classes.work}>{cl.title}</p>
              <p className={classes.work}>{cl.description}</p>
              <p className={classes.work}>{cl.author}</p>
            </div>
          </div>
        ))}
      </Carousel>

      {!filteredWork && (
        <div>
          <h2 className={classes.title}>New Releases</h2>

          <Carousel
            className={classes.worksContainer}
            slidesPerPage={5}
            arrowLeft={<a className={classes.prev} data-testid='new-left'>&#10094;</a>}
            arrowRight={<a className={classes.next}>&#10095;</a>}
            addArrowClickHandler
            infinite
            
          >
            {content_library.map((cl, i) => (
              <div key={i} className={classes.placeholderImage}>
                <div key={i} className={classes.works}>
                  <p className={classes.work}>{cl.title}</p>
                  <p className={classes.work}>{cl.description}</p>
                  <p className={classes.work}>{cl.author}</p>
                </div>
              </div>
            ))}
          </Carousel>

          <h2 className={classes.title}>Most Popular</h2>

          <Carousel
            className={classes.worksContainer}
            slidesPerPage={5}
            arrowLeft={
              <a className={classes.prev}>
                &#10094;
              </a>
            }
            arrowRight={
              <a className={classes.next} data-testid='pop-right'>
                &#10095;
              </a>
            }
            addArrowClickHandler
            infinite
            
          >
            {content_library.map((cl, i) => (
              <div key={i} className={classes.placeholderImage}>
                <div key={i} className={classes.works}>
                  <p className={classes.work}>{cl.title}</p>
                  <p className={classes.work}>{cl.description}</p>
                  <p className={classes.work}>{cl.author}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}

      {filteredWork && (
        <div className={classes.resultsContainer}>
          <h2 className={classes.title}>Search Results</h2>
          {filteredWork.map((cl, i) => (
            <div key={i} className={classes.results}>
              <div className={classes.placeholderImage}>
                <div className={classes.works}>
                  <p className={classes.work}>{cl.title}</p>
                  <p className={classes.work}>{cl.description}</p>
                  <p className={classes.work}>{cl.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={classes.bottomMargin}></div>
    </>
  );
}

