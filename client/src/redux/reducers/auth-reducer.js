import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/auth-actions/auth-actions-types';

const initialState = {
  isLoggedIn: false,
  hasError: null,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        hasError: null,
        token: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        hasError: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
