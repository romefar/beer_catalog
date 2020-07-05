import getBeerService from '../../../services/beer-service';

import {
  FETCH_BEER_ITEM_REQUEST,
  FETCH_BEER_ITEM_SUCCESS,
  FETCH_BEER_ITEM_FAILURE
} from './beer-item-actions-types';

const beerItemRequested = () => {
  return {
    type: FETCH_BEER_ITEM_REQUEST
  };
};

const beerItemLoaded = (beerItem) => {
  return {
    type: FETCH_BEER_ITEM_SUCCESS,
    payload: beerItem
  };
};

const beerItemLoadingFailed = (error) => {
  return {
    type: FETCH_BEER_ITEM_FAILURE,
    payload: error
  };
};

const fetchSingleBeer = (options) => async (dispatch) => {
  try {
    dispatch(beerItemRequested());
    const beerItem = await getBeerService().fetchSingleBeer(options);
    dispatch(beerItemLoaded(beerItem));
  } catch (error) {
    dispatch(beerItemLoadingFailed(error));
  }
};

export {
  fetchSingleBeer
};
