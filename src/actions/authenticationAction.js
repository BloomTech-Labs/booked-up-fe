import axios from "axios";
import jwt_decode from "jwt-decode";
import { TASK_FAIL } from "./authorAction";

export const CREATE_ACCOUNT = "CREATE_AUTHOR_ACCOUNT";
export const CREATE_AGENT_ACCOUNT = "CREATE_AGENT_ACCOUNT";
export const CREATE_FAN_ACCOUNT = "CREATE_FAN_ACCOUNT";
export const USER_LOGON = "USER_LOGON";
export const ADMIN_LOGON = "ADMIN_LOGON";
export const USER_LOGOUT = "USER_LOGOUT";

export const createAccount = (data, props) => dispatch => {
  axios
    .post("https://bookedup-pt9.herokuapp.com/api/auth/register", data)
    .then(res => {
      dispatch({ type: CREATE_ACCOUNT, payload: res.data });
      props.history.push("/login");
      //loadState();
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message })
      console.log(err.message)});
};

export const userLogon = (data, props) => dispatch => {
  axios
    .post("https://bookedup-pt9.herokuapp.com/api/auth/login", {
      login: data.login,
      password: data.password
    })
    .then(res => {
      localStorage.setItem("token", res.data.Token);
      dispatch({ type: USER_LOGON, payload: res.data });
      props.history.push("/dashboard");

      //loadState();
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message })
      console.log(err)});
};

export const adminLogon = (data, props) => dispatch => {
  axios
    .post("https://bookedup-pt9.herokuapp.com/api/auth/admin/login", {
      email: data.email,
      password: data.password
    })
    .then(res => {
      const decoded = jwt_decode(res.data.token);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: ADMIN_LOGON,
        payload: {
          message: res.data.message,
          user: {
            userType: decoded.userType[0]
          }
        }
      });
      props.history.push("/dashboard");

      //loadState();
    })
    .catch(err => console.log(err));
};

export const userLogout = data => dispatch => {
  dispatch({ type: USER_LOGOUT, payload: data });
};
