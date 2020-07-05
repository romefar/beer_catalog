import { BEER_THEME } from '../utils/constants/theme-constants';

class ThemeService {
  saveTheme = (themeName) => {
    localStorage.setItem(BEER_THEME, JSON.stringify({ themeName }));
  }

  checkTheme = (themeChangeHandler) => {
    const storedData = JSON.parse(localStorage.getItem(BEER_THEME));
    if (storedData) {
      themeChangeHandler(storedData.themeName);
    }
  }
}

const getThemeService = (() => {
  let instance = null;
  return () => {
    if (instance) {
      return instance;
    } else {
      instance = new ThemeService();
      return instance;
    }
  };
})();

export default getThemeService;
