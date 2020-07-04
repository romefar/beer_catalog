import {
  DATA_SEND_REQUEST,
  DATA_SEND_FAILURE,
  DATA_SEND_SUCCESS,
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
  DELETE_COMMENT_FAILURE,
  COMMENTS_FILTER_BY_DATE_ASC,
  COMMENTS_FILTER_BY_DATE_DESC,
  COMMENTS_FILTER_BY_USER_ID
} from './comments-actions-types';

const filterCommentsByDateAscending = () => {
  return {
    type: COMMENTS_FILTER_BY_DATE_ASC
  };
};

const filterCommentsByDateDescending = () => {
  return {
    type: COMMENTS_FILTER_BY_DATE_DESC
  };
};

const filterCommentsByUserId = (userId) => {
  return {
    type: COMMENTS_FILTER_BY_USER_ID,
    payload: userId
  };
};

const showNewComments = () => {
  return {
    type: SHOW_NEW_COMMENTS
  };
};

const socketDeleteComment = (commentId, beerId) => {
  return {
    type: 'socket',
    types: ['', DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE],
    promise: (socket) => socket.emit('deleteComment', { commentId, beerId })
  };
};

const socketSendMessage = (message) => {
  return {
    type: 'socket',
    types: [DATA_SEND_REQUEST, DATA_SEND_SUCCESS, DATA_SEND_FAILURE],
    promise: (socket) => socket.emit('sendMessage', message)
  };
};

const socketLoadInitialComments = (id) => {
  return {
    type: 'socket',
    types: [DATA_LOAD_INITIAL_COMMENTS_REQUEST, DATA_LOAD_INITIAL_COMMENTS_SUCCESS, DATA_LOAD_INITIAL_COMMENTS_FAILURE],
    promise: (socket) => socket.emit('getInitialComments', id)
  };
};

const getNewComment = (comment) => {
  if (comment.error) {
    return {
      type: UPDATE_COMMENTS_FAILURE,
      error: comment.error
    };
  }
  return {
    type: UPDATE_COMMENTS_SUCCESS,
    payload: comment
  };
};

const socketSetNewMessageHandler = (func) => {
  return {
    type: 'socket',
    types: ['', SET_UPDATE_COMMENTS_HANDLER_SUCCESS, SET_UPDATE_COMMENTS_HANDLER_FAILURE],
    promise: (socket) => socket.on('getNewComments', func)
  };
};

const socketConnect = () => {
  return {
    type: 'socket',
    types: [SOCKET_CONNECT_REQUEST, SOCKET_CONNECT_SUCCESS, SOCKET_CONNECT_FAILURE],
    promise: (socket) => socket.connect()
  };
};

const socketDisconnect = () => {
  return {
    type: 'socket',
    types: [SOCKET_DISCONNECT_REQUEST, SOCKET_DISCONNECT_SUCCESS, SOCKET_DISCONNECT_FAILURE],
    promise: (socket) => socket.disconnect()
  };
};

export {
  socketSendMessage,
  socketConnect,
  getNewComment,
  socketDisconnect,
  socketSetNewMessageHandler,
  socketLoadInitialComments,
  socketDeleteComment,
  showNewComments,
  filterCommentsByDateAscending,
  filterCommentsByDateDescending,
  filterCommentsByUserId
};
