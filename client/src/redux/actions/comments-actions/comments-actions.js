import {
  DATA_SEND_REQUEST,
  DATA_SEND_FAILURE,
  DATA_SEND_SUCCESS,
  SOCKET_CONNECT_REQUEST,
  SOCKET_CONNECT_FAILURE,
  SOCKET_CONNECT_SUCCESS,
  SOCKET_DISCONNECT_REQUEST,
  SOCKET_DISCONNECT_FAILURE,
  SOCKET_DISCONNECT_SUCCESS,
  DATA_UPDATE_COMMENTS_REQUEST,
  DATA_UPDATE_COMMENTS_SUCCESS,
  DATA_UPDATE_COMMENTS_FAILURE
} from './comment-actions-types';

const socketSendMessage = (message) => {
  return {
    type: 'socket',
    types: [DATA_SEND_REQUEST, DATA_SEND_SUCCESS, DATA_SEND_FAILURE],
    promise: (socket) => socket.emit('sendMessage', message)
  };
};

const socketGetNewMessages = (func) => {
  return {
    type: 'socket',
    types: [DATA_UPDATE_COMMENTS_REQUEST, DATA_UPDATE_COMMENTS_SUCCESS, DATA_UPDATE_COMMENTS_FAILURE],
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
  socketDisconnect,
  socketGetNewMessages
};
