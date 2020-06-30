import fetch from '../utils/fetch';

const AUTH_TOKEN = 'AUTH_TOKEN';

class AuthService {
  #timerId;

  isTimerSettled = () => {
    return this.#timerId;
  }

  #saveAuthData = (authData) => {
    const { token, userName, userId, image, expirationDate } = authData;
    // Auto logout in 1 minute
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
    console.log(`Timer cleared id: ${this.#timerId}`);
    this.#timerId = null;
  }

  setLogoutTimer = (expiration, logoutHandler) => {
    this.#timerId = setTimeout(logoutHandler, expiration.getTime() - new Date().getTime());
    console.log(`Timer settled id: ${this.#timerId}`);
  }

  checkSignIn = (signInHandler) => {
    const storedData = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
    if (storedData && new Date(storedData.expiration > new Date())) {
      console.log('SignIn succesfully checked.');
      console.dir(storedData);
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
