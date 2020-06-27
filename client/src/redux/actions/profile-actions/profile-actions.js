import getProfileService from '../../../services/profile-service';
import {
  ADD_BEER_TO_FAVOURITES_SUCCESS,
  ADD_BEER_TO_FAVOURITES_FAILURE,
  REMOVE_BEER_FROM_FAVOURITES_SUCCESS,
  REMOVE_BEER_FROM_FAVOURITES_FAILURE,
  FETCH_BEER_LIST_FAVOURITES_SUCCESS,
  FETCH_BEER_LIST_FAVOURITES_FAILURE
} from './profile-actions-types';

const fetchBeerFavourites = () => async (dispatch) => {
  try {
    const userData = await getProfileService().getBeerFavouritesList();
    dispatch(fetchBeerFavouritesSuccess(userData.favourites));
  } catch (error) {
    dispatch(fetchBeerFavouritesFailure(error));
  }
};

const fetchBeerFavouritesSuccess = (favourites) => {
  return {
    type: FETCH_BEER_LIST_FAVOURITES_SUCCESS,
    payload: [...favourites]
  };
};

const fetchBeerFavouritesFailure = (error) => {
  return {
    type: FETCH_BEER_LIST_FAVOURITES_FAILURE,
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
    type: ADD_BEER_TO_FAVOURITES_SUCCESS,
    payload: [...userData]
  };
};

const addBeerToFavouritesFailure = (error) => {
  return {
    type: ADD_BEER_TO_FAVOURITES_FAILURE,
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
    type: REMOVE_BEER_FROM_FAVOURITES_SUCCESS,
    payload: [...userData]
  };
};

const removeBeerFromFavouritesFailure = (error) => {
  return {
    type: REMOVE_BEER_FROM_FAVOURITES_FAILURE,
    payload: { ...error }
  };
};

export {
  addBeerToFavourites,
  removeBeerFromFavourites,
  fetchBeerFavourites
};
