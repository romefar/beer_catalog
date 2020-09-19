import {
  THEME_CHANGE
} from './theme-actions-types';
import {
  LIGHT_THEME
} from '../../../utils/constants/theme-constants';

const changeTheme = (name) => {
  return {
    type: THEME_CHANGE,
    payload: name
  };
};

const clearTheme = () => {
  return {
    type: THEME_CHANGE,
    payload: LIGHT_THEME
  };
};

export {
  changeTheme,
  clearTheme
};
