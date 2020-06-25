import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUBMIT
} from './sign-up-actions-types';

const signupSubmit = () => {
  return {
    type: SIGNUP_SUBMIT
  };
};

const signupSuccess = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data
  };
};

const signupFailed = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error
  };
};

export {
  signupSubmit,
  signupSuccess,
  signupFailed
};
