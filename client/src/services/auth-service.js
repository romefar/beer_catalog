import fetch from '../utils/fetch';
import { BEER_THEME } from '../utils/constants/theme-constants';

const AUTH_TOKEN = 'AUTH_TOKEN';

class AuthService {
  #timerId;

  isTimerSettled = () => {
    return this.#timerId;
  }

  updateImage = (image) => {
    const storedData = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
    storedData.image = image;
    localStorage.setItem(AUTH_TOKEN, JSON.stringify(storedData));
  }

  #saveAuthData = (authData) => {
    const { token, userName, userId, image, expirationDate } = authData;
    // Auto logout in 1 hour
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem(AUTH_TOKEN, JSON.stringify({ token, userId, userName, image, expiration: tokenExpirationDate }));
    return tokenExpirationDate;
  }

  signIn = async (authBody) => {
    const authData = await fetch('/signin', 'POST', authBody);
    const tokenExpirationDate = this.#saveAuthData(authData);
    return {
      ...authData,
      expiration: tokenExpirationDate
    };
  }

  clearLogoutTimer = () => {
    clearTimeout(this.#timerId);
    this.#timerId = null;
  }

  setLogoutTimer = (expiration, logoutHandler) => {
    this.#timerId = setTimeout(logoutHandler, expiration.getTime() - new Date().getTime());
  }

  checkSignIn = (signInHandler) => {
    const storedData = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
    if (storedData && new Date(storedData.expiration > new Date())) {
      signInHandler({
        ...storedData,
        expiration: new Date(storedData.expiration)
      });
    }
  }

  signUp = async (authBody) => {
    return await fetch('/signup', 'POST', authBody);
  }

  clearAuthData = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(BEER_THEME);
  }
}

const getAuthService = (() => {
  let instance = null;
  return () => {
    if (instance) {
      return instance;
    } else {
      instance = new AuthService();
      return instance;
    }
  };
})();

export default getAuthService;
