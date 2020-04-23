import { SOMETHING_STUB } from "../Actions/authenticationAction";
import { initialState } from "./indexReducer";

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_STUB: {
      return state;
    }
    default: {
      return state;
    }
  }
};
