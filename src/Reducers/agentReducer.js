import { SOMETHING_AGENT_STUB } from "../actions/agentAction";
import { initialState } from "./indexReducer";

export const agentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_AGENT_STUB: {
      console.log(action.payload, "agentReducer.js, SOMETHING_AGENT_STUB");
      return state;
    }
    default: {
      return state;
    }
  }
};
