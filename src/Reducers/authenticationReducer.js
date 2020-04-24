import { SOMETHING_AUTHENTICATION_STUB } from "../Actions/authenticationAction";
import { initialState } from "./indexReducer";

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_AUTHENTICATION_STUB: {
      console.log(
        action.payload,
        "authenticationReducer.js, SOMETHING_AUTHENTICATION_STUB"
      );
      return state;
    }
    default: {
      return state;
    }
  }
};
