import getAuthService from '../../../services/auth-service';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from './sign-up-actions-types';

const signUpSubmit = (formData) => async (dispatch) => {
  try {
    const authData = await getAuthService().signUp(formData);
    dispatch(signUpSuccess(authData));
  } catch (error) {
    dispatch(signUpFailed(error));
  }
};

const signUpSuccess = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data
  };
};

const signUpFailed = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error
  };
};

export {
  signUpSubmit
};
