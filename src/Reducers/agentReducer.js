import { SOMETHING_STUB } from "../Actions/agentAction";
import { initialState } from "./indexReducer";

export const agentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_STUB: {
      return state;
    }
    default: {
      return state;
    }
  }
};
