const CONNECTION = 'connection';
const DISCONNECTION = 'disconnect';
const SEND_MESSAGE = 'sendMessage';
const GET_NEW_COMMENTS = 'getNewComments';

const comments = [{
  id: 1,
  name: 'Mark',
  description: 'asdasdasd'
}, {
  id: 2,
  name: 'Jen',
  description: 'asdasd2asd'
}, {
  id: 3,
  name: 'Joseph',
  description: 'asdasdassd'
}];

class CommentsController {
  constructor (io) {
    this.io = io;
  }

  listen = () => {
    this.io.on(CONNECTION, (socket) => {
      console.log('a user is connected ' + socket.id);

      socket.on(SEND_MESSAGE, (data, cb) => {
        console.log(data);
        comments.push(data);
        // cb({});
        socket.emit('getNewComments', data);
      });

      socket.on(GET_NEW_COMMENTS, (data, cb) => {

      });

      socket.on(DISCONNECTION, () => {
        console.log('a user is disconnected ' + socket.id);
      });
    });
  }
}

module.exports = CommentsController;
