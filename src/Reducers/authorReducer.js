import { SOMETHING_AUTHOR_STUB } from "../Actions/authorAction";
import { initialState } from "./indexReducer";

export const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_AUTHOR_STUB: {
      action.payload += "authorReducer.js, SOMETHING_AUTHOR_STUB";
      console.log(action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
};
