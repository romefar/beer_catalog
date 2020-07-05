import {
  THEME_CHANGE
} from '../actions/theme-actions/theme-actions-types';

import {
  LIGHT_THEME
} from '../../utils/constants/theme-constants';

const initialState = {
  themeName: LIGHT_THEME
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        themeName: action.payload
      };
    default:
      return state;
  }
};

export default themeReducer;
