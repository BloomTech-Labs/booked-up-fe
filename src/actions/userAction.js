import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const EDIT_USER = "EDIT_USER";

export const EditAccount = (data) => dispatch => {
    console.log(data)
    axios
      .put(`https://bookedup-pt9.herokuapp.com/api/users/${data.id}`, data)
      .then(res => {
        dispatch({ type: EDIT_USER, payload: res.data });
        //loadState();
      })
      .catch(err => console.log(err.message));
};

