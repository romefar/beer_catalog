const express = require('express');
const cors = require('cors');
const path = require('path');
const dbConnect = require('./db/connection/mongoose');
const beerRoute = require('./api/controllers/beer-controller/routes');
const authRoute = require('./api/controllers/auth-controller/routes');
const profileRoute = require('./api/controllers/profile-controller/routes');
const auth = require('./middlewares/auth');
const app = express();
const server = require('http').Server(app);
const initSocket = require('./socket/initSocket');
const socket = initSocket(server);
const CommentsController = require('./api/controllers/comments-controller/controller');
const controller = new CommentsController(socket);
controller.listen();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'uploads', 'profile-images')));
app.use(cors({
  origin: '*',
  methods: 'GET, POST, PATCH, DELETE'
}));

app.use('/beers', beerRoute);
app.use(authRoute);
app.use('/profile', auth, profileRoute);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).send({
    message: error.message || 'An unknown error occured.'
  });
});

const port = process.env.PORT || 5000;

dbConnect()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server is running on port ${port}\nDB is running.`);
    });
  })
  .catch(e => {
    console.log(`An error has occured while running the db. ${e.message}`);
  });
