import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const CREATE_ACCOUNT = "CREATE_AUTHOR_ACCOUNT";
export const CREATE_AGENT_ACCOUNT = "CREATE_AGENT_ACCOUNT";
export const CREATE_FAN_ACCOUNT = "CREATE_FAN_ACCOUNT";
export const USER_LOGON = "USER_LOGON";
export const USER_LOGOUT = "USER_LOGOUT";

export const createAccount = (data, props) => dispatch => {
  axios
    .post("https://bookedup-pt9.herokuapp.com/api/auth/register", data)
    .then(res => {
      localStorage.setItem("token", res.data.payload.password);
      data.id = res.data;
      dispatch({ type: CREATE_ACCOUNT, payload: data });
      props.history.push("/dashboard");
    })
    .catch(err => console.log(err.message));
};

export const userLogon = data => dispatch => {
  console.log("NL: authenticationAction.js: userLogon: ", "Data: ", data);
  axios.post("https://bookedup-pt9.herokuapp.com/api/auth/login", {});
  dispatch({ type: USER_LOGON, payload: data });
};

export const userLogout = data => dispatch => {
  dispatch({ type: USER_LOGOUT, payload: data });
};
