const authService = require('../../services/auth-service');

class AuthController {
  signIn = async (req, res, next) => {
    try {
      const { userId, image, token } = await authService.signIn(req.body);
      res.send({ userId, token, image });
    } catch (error) {
      next(error);
    }
  }

  signUp = async (req, res, next) => {
    try {
      const userId = await authService.signUp(req.body);
      res.status(201).send({ userId });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
