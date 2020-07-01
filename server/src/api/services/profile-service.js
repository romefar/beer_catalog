const profileRepository = require('../data-access-layer/profile-repository');
const Joi = require('@hapi/joi');
const HttpError = require('../../error-models/http-error');
const fs = require('fs');
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
    const userImage = image.split('\\').pop();
    const user = await this.repository.getById(userId);

    if (user.image !== 'default_profile.png') {
      fs.unlink(`uploads/profile-images/${user.image}`, (err) => {
        if (err) throw err;
        console.log('Image was deleted.');
      });
    }
    await this.repository.update({ _id: userId }, { image: userImage });
    return userImage;
  };

  addBeerToFavourites = async (params) => {
    const isValid = Joi.object({
      id: Joi.number().required(),
      userId: Joi.string().required()
    }).validate(params);

    if (isValid.error) {
      throw new HttpError('Cannot find route.', 404);
    };

    // TODO: Add check for existing ids
    const updatedUser = await this.repository.update({
      _id: params.userId
    }, {
      $push: {
        favourites: {
          beerId: params.id
        }
      }
    });

    if (!updatedUser) {
      throw new Error('Cannot update this user.');
    }

    return updatedUser;
  }

  getBeerFavouritesList = async (id) => {
    const user = await this.repository.getById(id);

    if (!user) {
      throw new HttpError('Cannot find a user.', 404);
    }

    return user;
  }

  removeBeerFromFavourites = async (params) => {
    const isValid = Joi.object({
      id: Joi.number().required(),
      userId: Joi.string().required()
    }).validate(params);

    if (isValid.error) {
      throw new HttpError('Cannot find route.', 404);
    };

    const updatedUser = await this.repository.update({
      _id: params.userId
    }, {
      $pull: {
        favourites: {
          beerId: params.id
        }
      }
    });

    if (!updatedUser) {
      throw new Error('Cannot update this user.');
    }

    return updatedUser;
  }
}

module.exports = new ProfileService();
