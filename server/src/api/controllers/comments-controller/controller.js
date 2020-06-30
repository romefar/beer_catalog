const commentsService = require('../../services/comments-service');
const CONNECTION = 'connection';
const DISCONNECTION = 'disconnect';
const SEND_MESSAGE = 'sendMessage';
const BROADCAST_NEW_COMMENT = 'getNewComments';
const GET_INITIAL_COMMENTS = 'getInitialComments';
const DELETE_COMMENT = 'deleteComment';

class CommentsController {
  constructor (io) {
    this.io = io;
  }

  getInitialComments = async (id, cb) => {
    try {
      const comments = await commentsService.getInitialComments(id);
      cb(comments.comments);
    } catch (error) {
      // eslint-disable-next-line standard/no-callback-literal
      cb({ error: error.message });
    }
  }

  deleteComment = async (data, cb) => {
    try {
      await commentsService.deleteComment(data.commentId, data.beerId);
      cb(data.commentId);
    } catch (error) {
      // eslint-disable-next-line standard/no-callback-literal
      cb({ error: error.message });
    }
  }

  addNewComment = async (data, cb) => {
    try {
      const comment = await commentsService.addNewComment(data.id, { description: data.description, creatorId: data.creatorId });
      // eslint-disable-next-line standard/no-callback-literal
      cb({});
      this.io.emit(BROADCAST_NEW_COMMENT, comment);
    } catch (error) {
      // eslint-disable-next-line standard/no-callback-literal
      cb({ error: error.message });
    }
  }

  listen = () => {
    this.io.on(CONNECTION, (socket) => {
      console.log('a user is connected ' + socket.id);

      this.socket = socket;

      socket.on(SEND_MESSAGE, this.addNewComment);
      socket.on(GET_INITIAL_COMMENTS, this.getInitialComments);
      socket.on(DELETE_COMMENT, this.deleteComment);
      socket.on(DISCONNECTION, () => {
        console.log('a user is disconnected ' + socket.id);
      });
    });
  }
}

module.exports = CommentsController;
