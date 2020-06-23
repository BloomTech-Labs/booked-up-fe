import {
  CREATE_ACCOUNT,
  USER_LOGON,
  ADMIN_LOGON,
  USER_LOGOUT
} from "../actions/authenticationAction";

import { GET_USERS, SET_ADMIN } from "../actions/adminAction";
import { EDIT_USER, EDIT_EMAIL, DELETE_USER, REM_SEL_WORK } from "../actions/userAction";
import { UPLOAD_CONTENT, SET_WORK, TASK_START, TASK_FAIL, DEL_WORK, GET_MESSAGES, EDIT_CONTENT, REMOVE_DATA } from "../actions/authorAction";
import { SET_CONTENT, ADD_COMMENT, REMOVE_CONTENT } from "../actions/fanAction"
import { GET_USER, SEND_MESSAGE } from "../actions/agentAction";

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
  messages: [],
  comments: [],
  currentWork: {},
  selectedUser: {}
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
    
    case SEND_MESSAGE: {
      return {
        ...state,
        isLoading: false,
        currentWork: {},
        selectedUser: {}
      };
    }

    case SET_ADMIN: {
      return { ...state, isAdmin: action.payload.data };
    }

    case GET_USERS: {
      return { ...state, userAccounts: action.payload };
    }


    case DELETE_USER: {
      return { ...state, userAccounts: action.payload };
    }

    case EDIT_USER: {
      return {...state, user: action.payload}
    }

    case EDIT_EMAIL: {
      return {...state, userAccounts: action.payload}
    }

    case GET_USER: {
      return {
        ...state,
        selectedUser: action.payload
      }
    }
    case TASK_START: {
      return {
        ...state,
        error: "",
        isLoading: true
      }
    }
    case GET_MESSAGES: {
      return {
        ...state,
        messages: action.payload
      }
    }
    case UPLOAD_CONTENT: {
      return {
        ...state,
        isLoading: false,
        authorContent: [...state.authorContent, action.payload]
      };
    }
    case REMOVE_DATA: {
      return {
        ...state,
        authorContent: state.authorContent.filter((work) => {
          return work.id !== action.payload
        })
      }
    }
    case EDIT_CONTENT: {
      return {
        ...state,
        isLoading: false,
        authorContent: [...state.authorContent, action.payload.content[0]]
      }
    }
    case SET_CONTENT: {
      return {
        ...state,
        contentLibrary: action.payload
      }
    }
    case REMOVE_CONTENT: {
      return {
        ...state,
        isLoading: false,
        contentLibrary: state.contentLibrary.filter((work) => {
          return work.id !== action.payload
        })
      }
    }
    case ADD_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
    }
    case DEL_WORK : {
      return {
        ...state,
        isLoading: false,
        authorContent: state.authorContent.filter((work) => {
          return work.id !== action.payload
        })
      }
    }

    case REM_SEL_WORK : {
      return {
        ...state,
        currentWork: {},
        selectedUser: {}
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
