import React, { useState, useReducer, useEffect } from "react";
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
  const [works, setWorks] = useState(props.authorContent);
  const [selected, setSelected] = useState("grid");
  const [delOpen, setDelOpen] = useState(false);

  const setView = selected => {
    setSelected(selected);
  };

  const handleDelOpen = () => {
    setDelOpen(true);
  };

  const handleDelClose = () => {
    setDelOpen(false);
  };

  console.log(
    "NL: MyWorks.jsx: MyWorks: Line 36: Line 36: props.authorContent: ",
    props.authorContent
  );
  console.log("NL: MyWorks.jsx: MyWorks: Line 37: Line 36: works: ", works);

  const classes = useStyles();

  return (
    <>
      <FullToolbar works={props.authorContent} setView={setView} />
      <Modal
        open={delOpen}
        onClose={handleDelClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <DeleteWorkModal work={props.currentWork} close={handleDelClose} />
      </Modal>
      <div className={classes.contentArea}>
        {selected === "grid" && <GridDisplay handleDelOpen={handleDelOpen} />}
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
    user: state.user,
    isLogged: state.isLogged,
    authorContent: state.authorContent,
    currentWork: state.currentWork
  };
};

export default connect(mapStateToProps, {})(MyWorks);
