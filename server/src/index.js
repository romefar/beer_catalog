const express = require('express');
const logger = require('./config/winston');
const path = require('path');
const cors = require('cors');

const dbConnect = require('./db/connection/mongoose');
const beerRoute = require('./api/controllers/beer-controller/routes');
const authRoute = require('./api/controllers/auth-controller/routes');
const ratingRoute = require('./api/controllers/rating-controller/routes');
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
  origin: 'https://romefar.github.io',
  methods: 'GET, POST, PATCH, DELETE'
}));

app.use('/api/v1/rating', ratingRoute);
app.use('/api/v1/beers', beerRoute);
app.use('/api/v1/profile', auth, profileRoute);
app.use(authRoute);

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  logger.error(`${error.code || 500} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(error.code || 500).send({
    message: error.message || 'An unknown error occured.'
  });
});

const port = process.env.PORT || 5000;

dbConnect()
  .then(() => {
    logger.info('Succesfully connected to the database.');
    server.listen(port, () => {
      logger.info(`Server is running on port ${port}.`);
    });
  })
  .catch(err => {
    logger.error(`Couldn't connect to the database. - ${err.message}`);
  });
