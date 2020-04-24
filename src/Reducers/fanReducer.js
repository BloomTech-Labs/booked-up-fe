import { SOMETHING_FAN_STUB } from "../Actions/fanAction";
import { initialState } from "./indexReducer";

export const fanReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_FAN_STUB: {
      console.log(action.payload, "fanReducer.js, SOMETHING_FAN_STUB");
      return state;
    }
    default: {
      return state;
    }
  }
};
