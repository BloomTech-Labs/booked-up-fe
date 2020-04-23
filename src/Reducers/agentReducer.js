import { SOMETHING_STUB } from "../Actions/agentAction";

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
