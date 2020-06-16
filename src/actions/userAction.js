import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import { userLogout } from "./authenticationAction"

export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export const EditAccount = (data) => dispatch => {

    let userData =  {
      first_name:data.firstName,
      last_name:data.lastName,
      user_type:data.userType,
      city:data.city,
      state:data.state,
      country:data.country,
      avatar_url:""
    }

    axiosWithAuth()
      .patch(`https://bookedup-pt9.herokuapp.com/api/users/${data.id}`, userData)
      .then(res => {
        dispatch({ type: EDIT_USER, payload: data });
        window.location.reload()
      })
      .catch(err => console.log(err.message));
};


export const DeleteUser = (data, props) => dispatch => {
  console.log(data)

    axiosWithAuth()
      .delete(`https://bookedup-pt9.herokuapp.com/api/users/${data.id}`)
      .then(res => {
        dispatch({ type: DELETE_USER, payload: data });        
        alert('Account have been deleted')
        localStorage.clear();
        window.location.replace("/login"); 
      })
      .catch(err => console.log(err.message));
};

