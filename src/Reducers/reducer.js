import {
  CREATE_ACCOUNT,
  USER_LOGON,
  ADMIN_LOGON,
  USER_LOGOUT
} from "../actions/authenticationAction";

import { GET_USERS, SET_ADMIN } from "../actions/adminAction";
import { UPLOAD_CONTENT } from "../actions/authorAction";

const initialState = {
  user: {
    id: "",
    userType: "author",
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    country: "",
    city: "",
    state: "",
    createdAt: ""
  },

  message: "",
  isAdmin: false,
  isLogged: false,
  contentLibrary: [],
  authorContent: [],
  userAccounts: []
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

    case ADMIN_LOGON: {
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
        isLogged: true
      };
    }

    case USER_LOGOUT: {
      return {
        ...state,
        isLogged: false
      };
    }

    case SET_ADMIN: {
      return { ...state, isAdmin: action.payload.data };
    }

    case GET_USERS: {
      return { ...state, userAccounts: action.payload };
    }

    case UPLOAD_CONTENT: {
      return {
        ...state,
        authorContent: [...state.authorContent, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
