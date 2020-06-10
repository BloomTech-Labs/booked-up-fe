import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const EDIT_USER = "EDIT_USER";

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

