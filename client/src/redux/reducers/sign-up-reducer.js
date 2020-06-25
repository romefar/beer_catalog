import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUBMIT
} from '../actions/sign-up-actions/sign-up-actions-types';

const initialState = {
  isLoggedIn: false,
  hasError: null,
  userData: null
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUBMIT:
      return state;
    case SIGNUP_SUCCESS:
      return {
        isLoggedIn: true,
        hasError: null,
        userData: action.payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        hasError: action.payload
      };
    default:
      return state;
  }
};

export default signUpReducer;
