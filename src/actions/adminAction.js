import { axiosWithAuth } from "../utils/axiosWithAuth";

export const SET_ADMIN = "SET_ADMIN";
export const GET_USERS = "GET_USERS";

export const getUsers = data => dispatch => {
  axiosWithAuth()
    .get("https://bookedup-pt9.herokuapp.com/api/users/")
    .then(res => {
      console.log(res.data)
      dispatch({ type: GET_USERS, payload: res.data });
    })
    .catch(err => console.log(err.message));
};

export const setAdmin = data => dispatch => {
  dispatch({ type: SET_ADMIN, payload: data });
};
