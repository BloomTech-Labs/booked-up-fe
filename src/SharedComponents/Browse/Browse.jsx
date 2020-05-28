import React, { useState, useEffect } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../utils/axiosWithAuth.jsx";
import Modal from '@material-ui/core/Modal';
import OpenWorkModal from "./OpenWorkModal.jsx";

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

function Browse(props) {
  const classes = useStyles();
  const [works, setWorks] = useState([{}]);
  const [filter, setFilter] = useState("all");
  const [value, setValue] = useState("");
  const [filteredWork, setFilteredWork] = useState();
  
  const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  useEffect(() => {
    axiosWithAuth()
      .get("https://bookedup-pt9.herokuapp.com/api/author-content")
      .then(res => {
        console.log(res)
        setWorks(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
      works.filter(work => {
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
        {works.map((cl, i) => (
          <div key={i} className={classes.placeholderImage} onClick={handleOpen}>
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
            arrowLeft={<button className={classes.prev} data-testid='new-left'>&#10094;</button>}
            arrowRight={<button className={classes.next}>&#10095;</button>}
            addArrowClickHandler
            infinite
            
          >
            {works.map((cl, i) => (
              <div key={i} className={classes.placeholderImage} onClick={handleOpen}>
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
              <button className={classes.prev}>
                &#10094;
              </button>
            }
            arrowRight={
              <button className={classes.next} data-testid='pop-right'>
                &#10095;
              </button>
            }
            addArrowClickHandler
            infinite
            
          >
            {works.map((cl, i) => (
              <div key={i} className={classes.placeholderImage} onClick={handleOpen}>
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
              <div className={classes.placeholderImage} onClick={handleOpen}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
        <OpenWorkModal />
        </div>
      </Modal>
      <div className={classes.bottomMargin}></div>
    </>
  );
}

const mapStateToProps = state => {
  return {
      user: state.user,
      isLogged: state.isLogged,
  }
}

export default connect (
  mapStateToProps,
  {}
)(Browse)