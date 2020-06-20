import React, { useState, useEffect } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../utils/axiosWithAuth.jsx";
import Modal from "@material-ui/core/Modal";
import OpenWorkModal from "./OpenWorkModal.jsx";
import RenderWork from "./RenderWork.jsx";
import ImagePlaceholder from "../../assets/image-placeholder.png";
import ColumnDisplay from "../Favorites/ContentViews/ColumnDisplay.jsx";

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
    width: "65%",
    margin: "auto"
  },
  placeholderImage: {
    position: "relative",
    backgroundSize: "100% 100%",
    backgroundColor: "grey",
    textAlign: "center",
    color: "white",
    height: "11.25em",
    width: "100%",
    border: "1px solid black"
  },
  featuredPlaceholderImage: {
    position: "relative",
    backgroundSize: "100% 100%",
    backgroundColor: "grey",
    textAlign: "center",
    color: "white",
    height: "15em",
    width: "100%",
    border: "1px solid black"
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
  const [selWork, setSelWork] = useState({});
  const [filter, setFilter] = useState("all");
  const [value, setValue] = useState("");
  const [filteredWork, setFilteredWork] = useState();
  const [newWorks, setNewWorks] = useState([{}])
  const [alphWorks, setAlphWorks] = useState([{}])
  const [featWorks, setFeatWorks] = useState([{}])
  const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  

  const handleClose = () => {
    setOpen(false);
  };

  const imageSet = (work) => {
    if(work.img_url) {
      return {
        backgroundImage: `url("${work.img_url}")`
      }
    }
    else {
      return {
        backgroundImage: `url("${ImagePlaceholder}")`
      }
    }
  }

  useEffect(() => {
    console.log(props.contentLibrary)
    axiosWithAuth()
      .get("https://bookedup-pt9.herokuapp.com/api/author-content")
      .then(res => {
        console.log(res);
        setWorks(res.data);
        setNewWorks(res.data)
        setAlphWorks(res.data)
        setFeatWorks(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
            work.description.toLowerCase().includes(value.toLowerCase())
            // work.Genres.toLowerCase().includes(value.toLowerCase())
            // work.author.toLowerCase().includes(value.toLowerCase())
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
        {featWorks.sort((x, y) => .5 - Math.random()).slice(0,5).map((cl, i) => (
          <div
            key={i}
            style={imageSet(cl)}
            className={classes.featuredPlaceholderImage}
            onClick={() => (setSelWork(cl), setOpen(true))}
          >
            <RenderWork cl={cl} i={i} feat={true}/>
          </div>
        ))}
      </Carousel>

      {!filteredWork && (
        <div>
          <h2 className={classes.title}>New Releases</h2>

          <Carousel
            className={classes.worksContainer}
            slidesPerPage={5}
            arrowLeft={
              <button className={classes.prev} data-testid="new-left">
                &#10094;
              </button>
            }
            arrowRight={<button className={classes.next}>&#10095;</button>}
            addArrowClickHandler
            infinite
          >
            {newWorks.sort((x, y) => x.created_at < y.created_at ? 1 : -1).map((cl, i) => (
              <div
                style={imageSet(cl)}
                key={i}
                className={classes.placeholderImage}
                onClick={() => (setSelWork(cl), setOpen(true))}
              >
                <RenderWork cl={cl} i={i} />
              </div>
            ))}
          </Carousel>

          <h2 className={classes.title}>A-Z</h2>

          <Carousel
            className={classes.worksContainer}
            slidesPerPage={5}
            arrowLeft={<button className={classes.prev}>&#10094;</button>}
            arrowRight={
              <button className={classes.next} data-testid="pop-right">
                &#10095;
              </button>
            }
            addArrowClickHandler
            infinite
          >
            {alphWorks.sort((x, y) => x.title > y.title ? 1 : -1).map((cl, i) => (
              <div
                key={i}
                style={imageSet(cl)}
                className={classes.placeholderImage}
                onClick={() => (setSelWork(cl), setOpen(true))}
              >
                <RenderWork cl={cl} i={i} />
              </div>
            ))}
          </Carousel>
        </div>
      )}

      {filteredWork && (
        <div className={classes.resultsContainer}>
          <h2 className={classes.title}>Search Results</h2>
          <ColumnDisplay contentWorks={filteredWork} openButton={false} setSelWork={setSelWork} setOpen = {setOpen}/>
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
        <OpenWorkModal work={selWork} handleClose={handleClose}/>
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
    contentLibrary: state.contentLibrary
  };
};

export default connect(mapStateToProps, {})(Browse);
