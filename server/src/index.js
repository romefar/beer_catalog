const express = require('express');
const cors = require('cors');
// const dbConnect = require('./db/mongoose');
const beerRoute = require('./api/controllers/beer-controller/routes');
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET, POST, PATCH, DELETE'
}));

app.use('/beers', beerRoute);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).send({
    message: error.message || 'An unknown error occured.'
  });
});

const port = process.env.PORT || 5000;

// dbConnect()
//   .then(() => {
app.listen(port, () => {
  console.log(`Server is running on port ${port}\nDB is running.`);
});
// })
// .catch(e => {
//   console.log(`An error has occured while running the db. ${e.message}`);
// });