const BaseRepository = require('./base-repository');
const Review = require('../../db/models/review');

class ReviewRepository extends BaseRepository {
  constructor () {
    super(Review);
  }
}

module.exports = new ReviewRepository();
