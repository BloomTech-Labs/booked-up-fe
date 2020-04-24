export const CREATE_AUTHOR_ACCOUNT = "CREATE_AUTHOR_ACCOUNT";
export const CREATE_AGENT_ACCOUNT = "CREATE_AGENT_ACCOUNT";
export const CREATE_FAN_ACCOUNT = "CREATE_FAN_ACCOUNT";
export const USER_LOGON = "USER_LOGON";
export const USER_LOGOUT = "USER_LOGOUT";

export const createAuthorAccount = data => dispatch => {
  dispatch({ type: CREATE_AUTHOR_ACCOUNT, payload: data });
};

export const createAgentAccount = data => dispatch => {
  dispatch({ type: CREATE_AGENT_ACCOUNT, payload: data });
};

export const createFanAccount = data => dispatch => {
  dispatch({ type: CREATE_FAN_ACCOUNT, payload: data });
};

export const userLogon = data => dispatch => {
  dispatch({ type: USER_LOGON, payload: data });
};

export const userLogout = data => dispatch => {
  dispatch({ type: USER_LOGOUT, payload: data });
};
