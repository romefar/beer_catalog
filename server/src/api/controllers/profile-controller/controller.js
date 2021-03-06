const profileService = require('../../services/profile-service');

class ProfileController {
  updateProfileImage = async (req, res, next) => {
    try {
      const imageUrl = await profileService.updateProfileImage({
        userId: req.userId,
        image: req.file.path
      });
      res.send({ imageUrl });
    } catch (error) {
      next(error);
    }
  }

  deleteProfile = async (req, res, next) => {
    try {
      await profileService.deleteUser({ userId: req.userId });
      res.send();
    } catch (error) {
      next(error);
    }
  }

  changeProfilePassword = async (req, res, next) => {
    try {
      await profileService.changeProfilePassword({
        userId: req.userId,
        ...req.body
      });
      res.send();
    } catch (error) {
      next(error);
    }
  }

  getBeerFavouritesList = async (req, res, next) => {
    try {
      const user = await profileService.getBeerFavouritesList(req.userId);
      res.send(user);
    } catch (error) {
      next(error);
    }
  }

  getProfileData = async (req, res, next) => {
    try {
      const profileData = await profileService.getProfileData({ userId: req.userId });
      res.send(profileData);
    } catch (error) {
      next(error);
    }
  }

  removeBeerFromFavourites = async (req, res, next) => {
    try {
      const user = await profileService.removeBeerFromFavourites({
        ...req.params, userId: req.userId
      });
      res.send(user);
    } catch (error) {
      next(error);
    }
  }

  addBeerToFavourites = async (req, res, next) => {
    try {
      const user = await profileService.addBeerToFavourites({
        ...req.params, userId: req.userId
      });
      res.send(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProfileController();
