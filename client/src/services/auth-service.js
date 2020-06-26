import fetch from '../utils/fetch';

const AUTH_TOKEN = 'AUTH_TOKEN';

class AuthService {
  #saveAuthData = (authData) => {
    const { token, userName, image, expirationDate } = authData;
    // Auto logout in 1 minute
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60);
    localStorage.setItem(AUTH_TOKEN, JSON.stringify({ token, userName, image, expiration: tokenExpirationDate }));
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
