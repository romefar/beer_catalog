const profileService = require('../../services/profile-service');

class ProfileController {
  updateProfileImage = async (req, res, next) => {
    try {
      await profileService.updateProfileImage({
        ...req.body,
        image: req.file.path
      });
      res.send({ message: 'Profile image updated.' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProfileController();
