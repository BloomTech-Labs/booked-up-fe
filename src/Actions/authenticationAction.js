import axios from "axios";

export const CREATE_ACCOUNT = "CREATE_AUTHOR_ACCOUNT";
export const CREATE_AGENT_ACCOUNT = "CREATE_AGENT_ACCOUNT";
export const CREATE_FAN_ACCOUNT = "CREATE_FAN_ACCOUNT";
export const USER_LOGON = "USER_LOGON";
export const USER_LOGOUT = "USER_LOGOUT";

export const createAccount = (data, props) => dispatch => {
  axios
    .post("https://bookedup-pt9.herokuapp.com/api/auth/register", {
      user_type: data.user_type,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password
    })
    .then(res => {
      console.log(
        "NL: authenticationAction.js: createAccount: axios.post.then: returned Data: ",
        res.data
      );
      localStorage.setItem("token", res.data.payload);
      data.id = res.data;
      dispatch({ type: CREATE_ACCOUNT, payload: data });
      props.history.push("/login");
    })
    .catch(err => console.log(err.message));
};

export const userLogon = data => dispatch => {
  dispatch({ type: USER_LOGON, payload: data });
};

export const userLogout = data => dispatch => {
  dispatch({ type: USER_LOGOUT, payload: data });
};
