import {
  CREATE_ACCOUNT,
  USER_LOGON,
  USER_LOGOUT
} from "../Actions/authenticationAction";

const initialState = {
  user: {
    id: "",
    user_type: "",
    first_name: "",
    last_name: "",
    display_name: "",
    email: "",
    country: "",
    city: "",
    state: "",
    created_at: "",
    type: "author"
  },

  message: "",
  isLogged: false,
  contentLibrary: [],
  authorContent: []
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT: {
      return {
        ...state,
        message: action.payload.message
      };
    }

    case USER_LOGON: {
      return {
        ...state,
        user: action.payload.User,
        authorContent: action.payload.AuthorContent,
        contentLibrary: action.payload.ContentLibrary,
        isLogged: true
      };
    }

    case USER_LOGOUT: {
      return {
        ...state,
      isLogged: false
    };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
