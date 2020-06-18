import {
  CREATE_ACCOUNT,
  USER_LOGON,
  ADMIN_LOGON,
  USER_LOGOUT
} from "../actions/authenticationAction";

import { GET_USERS, SET_ADMIN } from "../actions/adminAction";
import {
  UPLOAD_CONTENT,
  SET_WORK,
  TASK_START,
  TASK_FAIL,
  DEL_WORK,
  GET_MESSAGES
} from "../actions/authorAction";
import { SET_CONTENT, ADD_COMMENT } from "../actions/fanAction";
import {
  SET_FILTERED_DATA,
  SET_SORTED_DATA,
  CLEAR_FILTERED_DATA,
  CLEAR_SORTED_DATA
} from "../actions/sharedAction";

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
  currentWork: {},
  sortFilteredData: [],
  messages: [],
  comments: [],
  sortFilteredCleared: true,
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
      };
    }
    case UPLOAD_CONTENT: {
      return {
        ...state,
        isLoading: false,
        authorContent: [...state.authorContent, action.payload]
      };
    }
    case SET_CONTENT: {
      return {
        ...state,
        contentLibrary: action.payload
      };
    }
    case ADD_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    }
    case DEL_WORK: {
      return {
        ...state,
        authorContent: state.authorContent.filter(work => {
          return work.id !== action.payload;
        })
      };
    }
    case TASK_FAIL: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }

    case SET_WORK: {
      return {
        ...state,
        currentWork: action.payload
      };
    }

    case SET_FILTERED_DATA: {
      return {
        ...state,
        sortFilteredData: action.payload,
        sortFilteredCleared: false
      };
    }
    case SET_SORTED_DATA: {
      return {
        ...state,
        sortFilteredData: action.payload,
        sortFilteredCleared: false
      };
    }
    case CLEAR_FILTERED_DATA: {
      return { ...state, sortFilteredData: [], sortFilteredCleared: true };
    }
    case CLEAR_SORTED_DATA: {
      return { ...state, sortFilteredData: [], sortFilteredCleared: true };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
