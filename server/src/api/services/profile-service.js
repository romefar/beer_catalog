const profileRepository = require('../data-access-layer/profile-repository');
const beerRepositry = require('../data-access-layer/beer-repository');
const commentsRepository = require('../data-access-layer/comments-repository');
const Joi = require('@hapi/joi');
const HttpError = require('../../error-models/http-error');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const parseIngredients = require('../../utlis/parseIngredients');

class ProfileService {
  constructor () {
    this.repository = profileRepository;
  }

  getProfileData = async (params) => {
    const isValid = Joi.object({
      userId: Joi.string().required()
    }).validate(params);

    if (isValid.error) {
      throw new HttpError('Invalid body data.', 400);
    }

    const user = await this.repository.getById(params.userId);

    if (!user) {
      throw new HttpError('Cannot find a user.', 404);
    }

    const comments = await commentsRepository.getManyByCriteria({
      creatorId: params.userId
    });

    return {
      ...user.toObject(),
      favourites: user.favourites.length,
      comments: comments.length
    };
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

    const beerItem = await beerRepositry.getOneById(params.id);
    if (!beerItem) {
      throw new HttpError('Beer wasn\'t found');
    }
    const [malt, hops] = parseIngredients(beerItem.pop().ingredients);

    // TODO: Add check for existing ids
    const updatedUser = await this.repository.update({
      _id: params.userId
    }, {
      $push: {
        favourites: {
          beerId: params.id,
          malt,
          hops
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

  changeProfilePassword = async (params) => {
    const isValid = Joi.object({
      currentPassword: Joi.string().required(),
      newPassword: Joi.string().required(),
      userId: Joi.string().required()
    }).validate(params);

    if (isValid.error) {
      throw new HttpError('Invalid data. Check your fields.', 400);
    };

    const { userId, currentPassword, newPassword } = params;
    const user = await this.repository.getById(userId);
    if (!user) {
      throw new HttpError('A user wasn\'t found.', 404);
    }

    const isPasswordEquals = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordEquals) {
      throw new HttpError('Invalid username/password. Check your fields.', 404);
    }
    const password = await bcrypt.hash(newPassword, 12);
    await this.repository.update({
      _id: userId
    }, {
      password
    });
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

  deleteUser = async (params) => {
    await this.repository.update({
      _id: params.userId
    }, {
      name: 'DELETED',
      image: 'deleted.jpg',
      email: `none ${params.userId}`,
      password: 'deleted',
      favourites: []
    });
  }
}

module.exports = new ProfileService();
