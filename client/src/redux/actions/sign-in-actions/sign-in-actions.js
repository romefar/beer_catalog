import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_SUBMIT,
  LOGOUT
} from './sign-in-actions-types';

const loginSubmit = () => {
  return {
    type: SIGNIN_SUBMIT
  };
};

const loginSuccess = (authData) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: authData
  };
};

const loginFailed = (error) => {
  return {
    type: SIGNIN_FAILURE,
    payload: error
  };
};

const logout = () => {
  return {
    type: LOGOUT
  };
};

export {
  loginSubmit,
  loginSuccess,
  loginFailed,
  logout
};
