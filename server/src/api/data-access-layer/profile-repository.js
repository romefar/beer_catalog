const BaseRepository = require('./base-repository');
const User = require('../../db/models/user');

class ProfileRepository extends BaseRepository {
  constructor () {
    super(User);
  }
}

module.exports = new ProfileRepository();
