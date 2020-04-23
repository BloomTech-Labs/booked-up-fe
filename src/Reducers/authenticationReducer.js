import { SOMETHING_AUTHENTICATION_STUB } from "../Actions/authenticationAction";
import { initialState } from "./indexReducer";

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_AUTHENTICATION_STUB: {
      action.payload +=
        "authenticationReducer.js, SOMETHING_AUTHENTICATIONI_STUB";
      console.log(action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
};
