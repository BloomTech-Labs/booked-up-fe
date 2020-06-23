import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridDisplay from "./ContentViews/GridDisplay";
import RowDisplay from "./ContentViews/RowDisplay";
import ColumnDisplay from "./ContentViews/ColumnDisplay";
import { connect } from "react-redux";
import FullToolbar from "./ToolbarComponents/FullToolbar";
import DeleteWorkModal from "./DeleteWorkModal.jsx";
import Modal from "@material-ui/core/Modal";
import EditModal from "./EditModal.jsx";

const useStyles = makeStyles(theme => ({
  contentArea: {
    marginTop: "35px",
    marginLeft: "35px",
    marginRight: "35px"
  }
}));

function MyWorks(props) {
  const [works, setWorks] = useState(props.authorContent);
  const [selected, setSelected] = useState("grid");
  const [delOpen, setDelOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [filteredWork, setFilteredWork] = useState();
  const [value, setValue] = useState("");

  const applySortedData = data => {
    console.log("NL: MyWorks.jsx: applySortedData: data: ", data);
    setWorks(data);
  };
  const handleSearch = e => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(value);
  };
  const handleSubmit = e => {
    console.log(value)
    e.preventDefault();
    console.log(props.contentLibrary)
    setFilteredWork(
      props.authorContent.filter(work => {
            return (work.title.toLowerCase().includes(value.toLowerCase()) ||
            work.description.toLowerCase().includes(value.toLowerCase()))
            // work.Genres.toLowerCase().includes(value.toLowerCase())
            // work.author.toLowerCase().includes(value.toLowerCase())
      }))
    console.log(filteredWork);
  };

  const setView = selected => {
    setSelected(selected);
  };

  const handleDelOpen = () => {
    setDelOpen(true);
  };

  const handleDelClose = () => {
    setDelOpen(false);
  };

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };
  const classes = useStyles();

  return (
    <>
      <FullToolbar
        works={props.authorContent}
        applySortedData={applySortedData}
        setView={setView}
        handleSearch={handleSearch} handleSubmit={handleSubmit} value={props.value}
      />
      <Modal
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <EditModal work={props.currentWork} edit={handleEditClose} />
      </Modal>
      <Modal
        open={delOpen}
        onClose={handleDelClose}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <DeleteWorkModal work={props.currentWork} close={handleDelClose} />
      </Modal>
      {!filteredWork && (<div className={classes.contentArea}>
        {selected === "grid" && (
          <GridDisplay authorWorks={works} handleDelOpen={handleDelOpen} handleEditOpen={handleEditOpen} />
        )}
        {selected === "row" && (
          <RowDisplay authorWorks={works} handleDelOpen={handleDelOpen} handleEditOpen={handleEditOpen} />
        )}
        {selected === "column" && (
          <ColumnDisplay authorWorks={works} handleDelOpen={handleDelOpen} handleEditOpen={handleEditOpen} />
        )}
      </div>)}
      {filteredWork && (
        <div className={classes.resultsContainer}>
          <h2 className={classes.title}>Search Results</h2>
          <ColumnDisplay authorWorks={filteredWork} handleDelOpen={handleDelOpen} handleEditOpen={handleEditOpen} />
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    authorContent: state.authorContent,
    currentWork: state.currentWork
  };
};

export default connect(mapStateToProps, {})(MyWorks);
