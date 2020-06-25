const profileRepository = require('../data-access-layer/profile-repository');
const Joi = require('@hapi/joi');
const HttpError = require('../../error-models/http-error');

class ProfileService {
  constructor () {
    this.repository = profileRepository;
  }

  updateProfileImage = async (data) => {
    const isValid = Joi.object({
      userId: Joi.string().required(),
      image: Joi.string().required()
    }).validate(data);

    if (isValid.error) {
      throw new HttpError('Invalid body data.', 400);
    }
    const { userId, image } = data;
    await this.repository.update({ _id: userId }, { image });
  };
}

module.exports = new ProfileService();
