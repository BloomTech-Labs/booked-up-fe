import { SOMETHING_STUB } from "../Actions/authorAction";
import { initialState } from "./indexReducer";

export const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_STUB: {
      return state;
    }
    default: {
      return state;
    }
  }
};
