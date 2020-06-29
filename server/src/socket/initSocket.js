module.exports = (server) => {
  const io = require('socket.io')(server);
  return io;
};
