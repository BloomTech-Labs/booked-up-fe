import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { agentReducer } from "./agentReducer";
import { authenticationReducer } from "./authentication";
import { authorReducer } from "./authorReducer";
import { fanReducer } from "./fanReducer";

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
