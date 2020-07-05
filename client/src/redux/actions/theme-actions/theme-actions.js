import {
  THEME_CHANGE
} from './theme-actions-types';

const changeTheme = (name) => {
  return {
    type: THEME_CHANGE,
    payload: name
  };
};

export {
  changeTheme
};
