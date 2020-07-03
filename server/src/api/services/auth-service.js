const authRepository = require('../data-access-layer/auth-repository');
const Joi = require('@hapi/joi');
const HttpError = require('../../error-models/http-error');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv/config');

class AuthService {
  constructor () {
    this.repository = authRepository;
  }

  #createAccessToken = (userId, expiresIn = '1h') => {
    return jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn });
  }

  signIn = async (data) => {
    const isValid = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }).validate(data);

    if (isValid.error) {
      throw new HttpError('Invalid body data.', 400);
    }

    const { email, password } = data;

    const user = await this.repository.getOneByCriteria({ email });
    if (!user) {
      throw new HttpError('Invalid email or password.', 404);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new HttpError('Invalid email or password.', 404);
    }
    // TODO: Check getter for user.id later
    const token = this.#createAccessToken(user.id);

    return {
      userId: user.id,
      userName: user.name,
      image: user.image,
      token
    };
  };

  signUp = async (data) => {
    const isValid = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
    }).validate(data);

    if (isValid.error) {
      throw new HttpError('Invalid body data.', 400);
    }

    const { email, password } = data;

    const exUser = await this.repository.getOneByCriteria({ email });
    if (exUser) {
      throw new HttpError('This email address as already taken.', 409);
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.repository.create({
      ...data,
      image: 'default_profile.png',
      password: hashedPassword
    });

    // TODO: Check if it's neccesary
    return user.id;
  }
}

module.exports = new AuthService();
