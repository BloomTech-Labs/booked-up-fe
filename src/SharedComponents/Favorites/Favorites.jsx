import React, { useState } from "react";
//material ui imports
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
//redux imports
import { connect } from "react-redux";
//component imports
import RemoveModal from "./RemoveModal.jsx";
import ContentViewGroup from "../../Author/MyWorks/ToolbarComponents/ContentViewGroup";
import SortFilterGroup from "../../Author/MyWorks/ToolbarComponents/SortFilterGroup";
import SearchGroup from "../../Author/MyWorks/ToolbarComponents/SearchGroup";
import GridDisplay from "./ContentViews/GridDisplay";
import RowDisplay from "./ContentViews/RowDisplay";
import ColumnDisplay from "./ContentViews/ColumnDisplay";

//component styles
const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    margin: theme.spacing(2, 0),
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2px",
    width: "90%",
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: "10px"
  },
  contentArea: {
    marginTop: "35px",
    marginLeft: "35px",
    marginRight: "35px"
  }
}));
function Favorites(props) {
  const classes = useStyles();
  const [works, setWorks] = useState(props.contentLibrary);
  const [selected, setSelected] = useState("grid");
  const [remOpen, setRemOpen] = useState(false);
  const [filteredWork, setFilteredWork] = useState();
  const [value, setValue] = useState("");
  
  const handleSearch = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    //search goes through favorites and find works that match
    e.preventDefault();
    setFilteredWork(
      props.contentLibrary.filter(work => {
            return (work.title.toLowerCase().includes(value.toLowerCase()) ||
            work.description.toLowerCase().includes(value.toLowerCase()))
            // work.Genres.toLowerCase().includes(value.toLowerCase())
            // work.author.toLowerCase().includes(value.toLowerCase())
      }))
  };

  const applySortedData = data => {
    console.log("NL: MyWorks.jsx: applySortedData: data: ", data);
    setWorks(data);
  };

  const setView = selected => {
    setSelected(selected);
  };

  const handleRemOpen = () => {
    setRemOpen(true);
  };

  const handleRemClose = () => {
    setRemOpen(false);
  };
  return (
    /*Displays works saved to favorites with toolbar that sorts and an option to read or remove from favorites */
    <>
      <div className={classes.toolbar} data-testid="toolbar">
        <ContentViewGroup works={props.works} setView={setView} />
        <SortFilterGroup
          works={props.works}
          applySortedData={applySortedData}
        />
        <SearchGroup handleSearch={handleSearch} handleSubmit={handleSubmit} value={props.value}/>
      </div>
      <Modal
        open={remOpen}
        onClose={handleRemClose}
        aria-labelledby="remove-modal-title"
        aria-describedby="remove-modal-description"
      >
        <RemoveModal work={props.currentWork} close={handleRemClose} />
      </Modal>
      {!filteredWork && (<div className={classes.contentArea}>
        {selected === "grid" && <GridDisplay contentWorks={works} handleRemOpen={handleRemOpen}/>}
        {selected === "row" && <RowDisplay contentWorks={works} handleRemOpen={handleRemOpen}/>}
        {selected === "column" && <ColumnDisplay contentWorks={works} openButton={true} handleRemOpen={handleRemOpen}/>}
      </div>)}
      {filteredWork && (
        <div className={classes.resultsContainer}>
          <h2 className={classes.title}>Search Results</h2>
          <ColumnDisplay contentWorks={filteredWork} openButton={true} handleRemOpen={handleRemOpen}/>
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    contentLibrary: state.contentLibrary,
    currentWork: state.currentWork,
    isLoading: state.isLoadiing
  };
};

export default connect(mapStateToProps, {})(Favorites);
