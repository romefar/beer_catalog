import {
  DATA_SEND_REQUEST,
  DATA_SEND_SUCCESS,
  DATA_SEND_FAILURE,
  DATA_LOAD_INITIAL_COMMENTS_REQUEST,
  DATA_LOAD_INITIAL_COMMENTS_SUCCESS,
  DATA_LOAD_INITIAL_COMMENTS_FAILURE,
  SOCKET_CONNECT_REQUEST,
  SOCKET_CONNECT_FAILURE,
  SOCKET_CONNECT_SUCCESS,
  SOCKET_DISCONNECT_REQUEST,
  SOCKET_DISCONNECT_FAILURE,
  SOCKET_DISCONNECT_SUCCESS,
  UPDATE_COMMENTS_SUCCESS,
  UPDATE_COMMENTS_FAILURE,
  SET_UPDATE_COMMENTS_HANDLER_SUCCESS,
  SET_UPDATE_COMMENTS_HANDLER_FAILURE,
  SHOW_NEW_COMMENTS,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
  // COMMENTS_FILTER_BY_DATE_ASC,
  // COMMENTS_FILTER_BY_DATE_DESC,
  // COMMENTS_FILTER_BY_USER_ID
} from '../actions/comments-actions/comments-actions-types';

const initalState = {
  isSending: false,
  hasError: null,
  isLoading: false,
  connected: false,
  newCommentsHandlerSettled: false,
  items: [],
  newComments: [],
  hasNewComments: false,
  isInitialLoad: true
};

//
//
// TODO: MOVE SORTING TO SELECTORS!!!!!!!!!!!!!!!
//
//
const commentsReducer = (state = initalState, action) => {
  switch (action.type) {
    case SOCKET_CONNECT_REQUEST:
    case SOCKET_DISCONNECT_REQUEST:
      return {
        ...state
      };
    case SHOW_NEW_COMMENTS:
      return {
        ...state,
        items: [...state.items, ...state.newComments],
        newComments: [],
        hasNewComments: false
      };
    case DATA_LOAD_INITIAL_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case SET_UPDATE_COMMENTS_HANDLER_SUCCESS:
      return {
        ...state,
        newCommentsHandlerSettled: true
      };
    case UPDATE_COMMENTS_SUCCESS:
      return {
        ...state,
        newComments: [...state.newComments, ...[action.payload]],
        hasNewComments: true
      };
    case UPDATE_COMMENTS_FAILURE:
    case SOCKET_CONNECT_FAILURE:
    case SOCKET_DISCONNECT_FAILURE:
    case DELETE_COMMENT_FAILURE:
    case SET_UPDATE_COMMENTS_HANDLER_FAILURE:
      return {
        ...state,
        hasNewComments: false,
        hasError: action.error
      };
    case SOCKET_CONNECT_SUCCESS:
      return {
        ...state,
        hasError: null,
        connected: true
      };
    case DATA_LOAD_INITIAL_COMMENTS_SUCCESS:
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
        isInitialLoad: false
      };
    case DATA_LOAD_INITIAL_COMMENTS_FAILURE:
      return {
        ...state,
        hasError: action.error
      };
    case SOCKET_DISCONNECT_SUCCESS:
      return initalState;
    case DATA_SEND_REQUEST:
      return {
        ...state,
        isSending: true
      };
    case DATA_SEND_SUCCESS:
      return {
        ...state,
        isSending: false
      };
    case DATA_SEND_FAILURE:
      return {
        ...state,
        hasError: action.error,
        isSending: false
      };
    default: {
      return state;
    }
  }
};

export default commentsReducer;
