const BaseRepository = require('./base-repository');
const User = require('../../db/models/user');

class UsersRepository extends BaseRepository {
  constructor () {
    super(User);
  }
}

module.exports = new UsersRepository();
