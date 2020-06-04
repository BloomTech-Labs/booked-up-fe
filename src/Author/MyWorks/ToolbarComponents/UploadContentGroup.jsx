import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import UploadModal from "../UploadModal";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles(theme => ({
  leftToolbarButton: {
    marginRight: "25px"
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

const UploadContentGroup = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={classes.leftToolbarButton}
        data-testid="upload-button"
        onClick={handleOpen}
      >
        <Tooltip title="Upload New Work">
          <IconButton className={classes.iconButton}>
            <PublishOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Modal
        open={open}
        data-testid="upload-modal"
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <UploadModal />
        </div>
      </Modal>
    </>
  );
};

export default UploadContentGroup;
