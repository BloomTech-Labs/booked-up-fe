import {
  CREATE_AUTHOR_ACCOUNT,
  CREATE_AGENT_ACCOUNT,
  CREATE_FAN_ACCOUNT,
  USER_LOGON,
  USER_LOGOUT
} from "../actions/authenticationAction";
import { initialState } from "./indexReducer";

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_AUTHOR_ACCOUNT: {
      return state;
    }

    case CREATE_AGENT_ACCOUNT: {
      return state;
    }

    case CREATE_FAN_ACCOUNT: {
      return state;
    }

    case USER_LOGON: {
      return state;
    }

    case USER_LOGOUT: {
      return state;
    }
    default: {
      return state;
    }
  }
};
