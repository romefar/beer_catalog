import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  UPDATE_SIGNIN_IMAGE,
  LOGOUT
} from '../actions/sign-in-actions/sign-in-actions-types';

const initialState = {
  isLoggedIn: false,
  hasError: null,
  userData: null
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        isLoggedIn: true,
        hasError: null,
        userData: action.payload
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        hasError: action.payload
      };
    case UPDATE_SIGNIN_IMAGE:
      return {
        ...state,
        userData: { ...state.userData, image: action.payload }
      };
    case LOGOUT:
      return {
        isLoggedIn: false,
        hasError: null,
        userData: null
      };
    default:
      return state;
  }
};

export default signInReducer;
