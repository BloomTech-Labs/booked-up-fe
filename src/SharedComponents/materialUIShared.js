import { makeStyles } from "@material-ui/core/styles";

export const sharedToolbarStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    margin: theme.spacing(2, 0),
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2px",
    marginBottom: "2px",
    width: "95%",
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: "10px"
  }
}));

export const sharedPaperStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    left: "35%",
    top: "20%",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
