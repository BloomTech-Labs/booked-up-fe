import { SOMETHING_STUB } from "../Actions/fanAction";

export const fanReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOMETHING_STUB: {
      return state;
    }
    default: {
      return state;
    }
  }
};
