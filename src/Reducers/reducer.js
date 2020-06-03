import {
  CREATE_ACCOUNT,
  USER_LOGON,
  ADMIN_LOGON,
  USER_LOGOUT
} from "../actions/authenticationAction";

import { GET_USERS, SET_ADMIN } from "../actions/adminAction";
import { UPLOAD_CONTENT, SET_WORK, TASK_START, TASK_FAIL, DEL_WORK } from "../actions/authorAction";

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
  error: "",
  isAdmin: false,
  isLogged: false,
  isLoading: false,
  contentLibrary: [],
  authorContent: [],
  userAccounts: [],
  currentWork: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT: {
      return {
        ...state,
        message: action.payload.message,
        isLoading: false
      };
    }

    case USER_LOGON: {
      return {
        ...state,
        user: action.payload.User,
        authorContent: action.payload.AuthorContent,
        contentLibrary: action.payload.ContentLibrary,
        isLogged: true,
        isLoading: false
      };
    }

    case ADMIN_LOGON: {
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
        isLogged: true,
        isLoading: false
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
    case TASK_START: {
      return {
        ...state,
        error: "",
        isLoading: true
      }
    }
    case UPLOAD_CONTENT: {
      return {
        ...state,
        isLoading: false,
        authorContent: [...state.authorContent, action.payload]
      };
    }
    case DEL_WORK : {
      return {
        ...state,
        authorContent: state.authorContent.filter((work) => {
          return work.id !== action.payload
        })
      }
    }
    case TASK_FAIL: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    }

    case SET_WORK: {
      return {
        ...state,
        currentWork: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
