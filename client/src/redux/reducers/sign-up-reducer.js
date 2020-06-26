import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
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
