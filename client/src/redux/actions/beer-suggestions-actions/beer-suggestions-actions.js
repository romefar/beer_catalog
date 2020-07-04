import getBeerService from '../../../services/beer-service';
import {
  FETCH_BEER_SUGGESTIONS_REQUEST,
  FETCH_BEER_SUGGESTIONS_SUCCESS,
  FETCH_BEER_SUGGESTIONS_FAILURE
} from './beer-suggestions-actions-types';

const fetchBeerItemsRequest = () => {
  return {
    type: FETCH_BEER_SUGGESTIONS_REQUEST
  };
};

const fetchBeerItemsSuccess = (beerItems) => {
  return {
    type: FETCH_BEER_SUGGESTIONS_SUCCESS,
    payload: beerItems
  };
};

const fetchBeerItemsFailure = (error) => {
  return {
    type: FETCH_BEER_SUGGESTIONS_FAILURE,
    payload: error
  };
};

const fetchBeerSuggestions = (page) => async (dispatch) => {
  try {
    dispatch(fetchBeerItemsRequest());
    const beerItems = await getBeerService().fetchBeerSuggestions(page);
    dispatch(fetchBeerItemsSuccess(beerItems));
  } catch (error) {
    dispatch(fetchBeerItemsFailure(error));
  }
};

const fetchBeerSuggestionsByYeast = (page, yeast) => async (dispatch) => {
  try {
    dispatch(fetchBeerItemsRequest());
    const beerItems = await getBeerService().fetchBeerSuggestionsByYeast(page, yeast);
    dispatch(fetchBeerItemsSuccess(beerItems));
  } catch (error) {
    dispatch(fetchBeerItemsFailure(error));
  }
};

export {
  fetchBeerSuggestions,
  fetchBeerSuggestionsByYeast
};
