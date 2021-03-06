const { Router } = require('express');
const controller = require('./controller');
const imageUpload = require('../../../middlewares/file-upload');

module.exports = Router()
  .get('/beer/favourites', controller.getBeerFavouritesList)
  .post('/image/upload', imageUpload.single('profile-image'), controller.updateProfileImage)
  .patch('/password', controller.changeProfilePassword)
  .patch('/beer/favourites/:id', controller.addBeerToFavourites)
  .delete('/beer/favourites/:id', controller.removeBeerFromFavourites)
  .get('/', controller.getProfileData)
  .delete('/', controller.deleteProfile);
