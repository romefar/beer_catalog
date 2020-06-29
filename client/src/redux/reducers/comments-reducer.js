import {
  DATA_SEND_REQUEST,
  DATA_SEND_SUCCESS,
  DATA_SEND_FAILURE,
  SOCKET_CONNECT_REQUEST,
  SOCKET_CONNECT_FAILURE,
  SOCKET_CONNECT_SUCCESS,
  SOCKET_DISCONNECT_REQUEST,
  SOCKET_DISCONNECT_FAILURE,
  SOCKET_DISCONNECT_SUCCESS,
  DATA_UPDATE_COMMENTS_REQUEST,
  DATA_UPDATE_COMMENTS_SUCCESS,
  DATA_UPDATE_COMMENTS_FAILURE
} from '../actions/comments-actions/comment-actions-types';

const initalState = {
  isSending: false,
  hasError: null,
  connected: false,
  items: [],
  hasNewComments: false
};

const commentsReducer = (state = initalState, action) => {
  switch (action.type) {
    case DATA_UPDATE_COMMENTS_REQUEST:
    case SOCKET_CONNECT_REQUEST:
    case SOCKET_DISCONNECT_REQUEST:
      return {
        ...state
      };
    case DATA_UPDATE_COMMENTS_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...[action.payload]],
        hasNewComments: true
      };
    case DATA_UPDATE_COMMENTS_FAILURE:
    case SOCKET_CONNECT_FAILURE:
    case SOCKET_DISCONNECT_FAILURE:
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
    case SOCKET_DISCONNECT_SUCCESS:
      return {
        isSending: false,
        hasError: null,
        connected: false
      };
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
