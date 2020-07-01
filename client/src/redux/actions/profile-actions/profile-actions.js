import getProfileService from '../../../services/profile-service';
import {
  ADD_BEER_ID_TO_FAVOURITES_SUCCESS,
  ADD_BEER_ID_TO_FAVOURITES_FAILURE,
  REMOVE_BEER_ID_FROM_FAVOURITES_SUCCESS,
  REMOVE_BEER_ID_FROM_FAVOURITES_FAILURE,
  FETCH_BEER_IDS_LIST_FAVOURITES_SUCCESS,
  FETCH_BEER_IDS_LIST_FAVOURITES_FAILURE,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE
} from './profile-actions-types';

import { updateSignInImage } from '../sign-in-actions/sign-in-actions';

const fetchBeerFavouritesIds = () => async (dispatch) => {
  try {
    const userData = await getProfileService().getBeerFavouritesList();
    dispatch(fetchBeerFavouritesSuccess(userData.favourites));
  } catch (error) {
    dispatch(fetchBeerFavouritesFailure(error));
  }
};

const fetchBeerFavouritesSuccess = (favourites) => {
  return {
    type: FETCH_BEER_IDS_LIST_FAVOURITES_SUCCESS,
    payload: [...favourites]
  };
};

const fetchBeerFavouritesFailure = (error) => {
  return {
    type: FETCH_BEER_IDS_LIST_FAVOURITES_FAILURE,
    payload: { ...error }
  };
};

const addBeerToFavourites = (id) => async (dispatch) => {
  try {
    const userData = await getProfileService().addBeerToFavourites(id);
    dispatch(addBeerToFavouritesSuccess(userData.favourites));
  } catch (error) {
    dispatch(addBeerToFavouritesFailure(error));
  }
};

const addBeerToFavouritesSuccess = (userData) => {
  return {
    type: ADD_BEER_ID_TO_FAVOURITES_SUCCESS,
    payload: [...userData]
  };
};

const addBeerToFavouritesFailure = (error) => {
  return {
    type: ADD_BEER_ID_TO_FAVOURITES_FAILURE,
    payload: { ...error }
  };
};

const removeBeerFromFavourites = (id) => async (dispatch) => {
  try {
    const userData = await getProfileService().removeBeerFromFavourites(id);
    dispatch(removeBeerFromFavouritesSuccess(userData.favourites));
  } catch (error) {
    dispatch(removeBeerFromFavouritesFailure(error));
  }
};

const removeBeerFromFavouritesSuccess = (userData) => {
  return {
    type: REMOVE_BEER_ID_FROM_FAVOURITES_SUCCESS,
    payload: [...userData]
  };
};

const removeBeerFromFavouritesFailure = (error) => {
  return {
    type: REMOVE_BEER_ID_FROM_FAVOURITES_FAILURE,
    payload: { ...error }
  };
};

const updateProfileImage = (formData) => async (dispatch) => {
  try {
    const imageData = await getProfileService().updateProfileImage(formData);
    dispatch({
      type: IMAGE_UPLOAD_SUCCESS
    });
    dispatch(updateSignInImage(imageData.imageUrl));
  } catch (error) {
    dispatch({
      type: IMAGE_UPLOAD_FAILURE,
      payload: error
    });
  }
};

export {
  addBeerToFavourites,
  removeBeerFromFavourites,
  fetchBeerFavouritesIds,
  updateProfileImage
};
