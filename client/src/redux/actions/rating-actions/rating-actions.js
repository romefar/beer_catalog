import getRatingService from '../../../services/rating-service';
import {
  FETCH_RATING_SUCCESS,
  FETCH_RATING_FAILURE,
  INCREMENT_RATING_SUCCESS,
  INCREMENT_RATING_FAILURE,
  DECREMENT_RATING_SUCCESS,
  DECREMENT_RATING_FAILURE
} from './rating-actions-types';

const TYPE_INCREMENT = 'inc';
const TYPE_DECREMENT = 'dec';

const fetchRatingFull = (id) => async (dispatch) => {
  try {
    const beerRatingData = await getRatingService().getBeerRatingFull(id);
    dispatch({
      type: FETCH_RATING_SUCCESS,
      payload: beerRatingData
    });
  } catch (error) {
    dispatch({
      type: FETCH_RATING_FAILURE,
      payload: error
    });
  }
};

const fetchRatingValueOnly = (id) => async (dispatch) => {
  try {
    const beerRatingData = await getRatingService().getBeerRatingValueOnly(id);
    dispatch({
      type: FETCH_RATING_SUCCESS,
      payload: beerRatingData
    });
  } catch (error) {
    dispatch({
      type: FETCH_RATING_FAILURE,
      payload: error
    });
  }
};

const incrementRating = (id) => async (dispatch) => {
  try {
    const beerRating = await getRatingService().updateBeerRating(id, TYPE_INCREMENT);
    dispatch({
      type: INCREMENT_RATING_SUCCESS,
      payload: beerRating
    });
  } catch (error) {
    dispatch({
      type: INCREMENT_RATING_FAILURE,
      payload: error
    });
  }
};

const decrementRating = (id) => async (dispatch) => {
  try {
    const beerRating = await getRatingService().updateBeerRating(id, TYPE_DECREMENT);
    dispatch({
      type: DECREMENT_RATING_SUCCESS,
      payload: beerRating
    });
  } catch (error) {
    dispatch({
      type: DECREMENT_RATING_FAILURE,
      payload: error
    });
  }
};

export {
  fetchRatingFull,
  fetchRatingValueOnly,
  incrementRating,
  decrementRating
};
