import getAuthService from '../../../services/auth-service';
import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_RESET,
  UPDATE_SIGNIN_IMAGE,
  LOGOUT
} from './sign-in-actions-types';
import { clearTheme } from '../theme-actions/theme-actions';

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

const signInReset = () => {
  return {
    type: SIGNIN_RESET
  };
};

const signInFailed = (error) => {
  return {
    type: SIGNIN_FAILURE,
    payload: error
  };
};

const logout = () => async (dispatch) => {
  getAuthService().clearLogoutTimer();
  getAuthService().clearAuthData();
  dispatch(clearTheme());
  dispatch({
    type: LOGOUT
  });
};

export {
  signInSubmit,
  signInSuccess,
  signInReset,
  updateSignInImage,
  logout
};
