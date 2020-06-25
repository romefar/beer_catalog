const { Router } = require('express');
const controller = require('./controller');
const imageUpload = require('../../../middlewares/file-upload');

module.exports = Router()
  .post('/profile/image', imageUpload.single('profile-image'), controller.updateProfileImage);
