import { SOMETHING_AUTHOR_STUB } from "../actions/authorAction";
import { initialState } from "./indexReducer";

export const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_AUTHOR_STUB: {
      console.log(action.payload, "authorReducer.js, SOMETHING_AUTHOR_STUB");
      return state;
    }
    default: {
      return state;
    }
  }
};
