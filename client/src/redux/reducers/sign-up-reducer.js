import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_RESET
} from '../actions/sign-up-actions/sign-up-actions-types';

const initialState = {
  isRegistered: false,
  hasError: null,
  userData: null
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        isRegistered: true,
        hasError: null,
        userData: action.payload
      };
    case SIGNUP_RESET:
      return {
        ...initialState
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
