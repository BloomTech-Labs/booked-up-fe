import { combineReducers } from "redux";
import agentReducer from "./agentReducer";
import authenticationReducer from "./authentication";
import authorReducer from "./authorReducer";
import fanReducer from "./fan";

export const initialState = {
  username: ""
};

export default combineReducers({
  adminReducer,
  agentReducer,
  authenticationReducer,
  authorReducer,
  fanReducer
});
