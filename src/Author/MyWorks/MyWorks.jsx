import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridDisplay from "./ContentViews/GridDisplay";
import RowDisplay from "./ContentViews/RowDisplay";
import ColumnDisplay from "./ContentViews/ColumnDisplay";
import { connect } from "react-redux";
import FullToolbar from "./ToolbarComponents/FullToolbar";
import DeleteWorkModal from "./DeleteWorkModal.jsx";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles(theme => ({
  contentArea: {
    marginTop: "35px",
    marginLeft: "35px",
    marginRight: "35px"
  }
}));

function MyWorks(props) {
  const [sortedWorks, setSortedWorks] = useState([]);
  const [selected, setSelected] = useState("grid");
  const [delOpen, setDelOpen] = useState(false);
  const [isFull, setIsFull] = useState(true);

  const applySortedData = data => {
    if (data.length === 0 || data === undefined) {
      setIsFull(true);
    } else {
      setIsFull(false);
      setSortedWorks(data);
    }
  };

  const clearSortedData = () => {
    setIsFull(true);
    setSortedWorks([]);
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

  const classes = useStyles();

  return (
    <>
      <FullToolbar
        applySortedData={applySortedData}
        setView={setView}
        works={props.works}
        clearSortedData={clearSortedData}
      />
      <Modal
        open={delOpen}
        onClose={handleDelClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <DeleteWorkModal work={props.currentWork} close={handleDelClose} />
      </Modal>
      <div className={classes.contentArea}>
        {selected === "grid" && (
          <GridDisplay
            handleDelOpen={handleDelOpen}
            isFull={isFull}
            sortFilteredData={sortedWorks}
          />
        )}
        {selected === "row" && <RowDisplay handleDelOpen={handleDelOpen} />}
        {selected === "column" && (
          <ColumnDisplay handleDelOpen={handleDelOpen} />
        )}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    works: state.authorContent,
    currentWork: state.currentWork
  };
};

export default connect(mapStateToProps, {})(MyWorks);
