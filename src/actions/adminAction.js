import { axiosWithAuth } from "../utils/axiosWithAuth";

export const SET_ADMIN = "SET_ADMIN";
export const GET_USERS = "GET_USERS";
export const ADMIN_DEL_USER = "ADMIN_DEL_USER";

export const getUsers = data => dispatch => {
  axiosWithAuth()
    .get("https://bookedup-pt9.herokuapp.com/api/users/")
    .then(res => {
      console.log(res.data)
      dispatch({ type: GET_USERS, payload: res.data });
    })
    .catch(err => console.log(err.message));
};


export const AdminDeleteUser = (data) => dispatch => {
  
  axiosWithAuth()
    .delete(`https://bookedup-pt9.herokuapp.com/api/users/${data[0]}`)
    .then(res => {
      dispatch({ type: ADMIN_DEL_USER, payload: data });        
      alert('Account have been deleted')
      window.location.reload();
    })
    .catch(err => console.log(err));
};


export const setAdmin = data => dispatch => {
  dispatch({ type: SET_ADMIN, payload: data });
};
