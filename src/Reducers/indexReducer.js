import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { agentReducer } from "./agentReducer";
import { authenticationReducer } from "./authenticationReducer";
import { authorReducer } from "./authorReducer";
import { fanReducer } from "./fanReducer";

export const initialState = {
  username: ""
};

// This is the combineReducers, so we can split reducer files into smaller, more manageable pieces.
// We can combine these back for less granularity if some of the reducer files are small.
export default combineReducers({
  adminReducer,
  agentReducer,
  authenticationReducer,
  authorReducer,
  fanReducer
});
