import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = data => dispatch => {
  axiosWithAuth
    .get("https://bookedup-pt9.herokuapp.com/api/users", data)
    .then(res => {
      dispatch({ type: GET_USERS, payload: res.data });
    })
    .catch(err => console.log(err.message));
};
