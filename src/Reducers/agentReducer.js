import { SOMETHING_AGENT_STUB } from "../Actions/agentAction";
import { initialState } from "./indexReducer";

export const agentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_AGENT_STUB: {
      action.payload += "agentReducer.js, SOMETHING_AGENT_STUB";
      console.log(action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
};
