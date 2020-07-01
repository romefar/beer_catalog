import getAuthService from '../../../services/auth-service';
import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  UPDATE_SIGNIN_IMAGE,
  LOGOUT
} from './sign-in-actions-types';

const signInSubmit = (formData, history) => async (dispatch) => {
  try {
    const authData = await getAuthService().signIn(formData);
    dispatch(signInSuccess(authData, history));
  } catch (error) {
    dispatch(signInFailed(error));
  }
};

const updateSignInImage = (image) => {
  getAuthService().updateImage(image);
  return {
    type: UPDATE_SIGNIN_IMAGE,
    payload: image
  };
};

const signInSuccess = (authData, history) => {
  if (history) {
    history.push('/');
  }
  return {
    type: SIGNIN_SUCCESS,
    payload: authData
  };
};

const signInFailed = (error) => {
  return {
    type: SIGNIN_FAILURE,
    payload: error
  };
};

const logout = () => {
  getAuthService().clearLogoutTimer();
  getAuthService().clearAuthData();
  return {
    type: LOGOUT
  };
};

export {
  signInSubmit,
  signInSuccess,
  updateSignInImage,
  logout
};
