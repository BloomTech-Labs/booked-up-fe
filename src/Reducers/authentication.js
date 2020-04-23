import { SOMETHING_STUB } from "../Actions/authorizationAction";

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
