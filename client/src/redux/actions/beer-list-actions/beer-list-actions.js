import getBeerService from '../../../services/beer-service';

import {
  FETCH_BEER_LIST_REQUEST,
  FETCH_BEER_LIST_SUCCESS,
  FETCH_BEER_LIST_FAILURE
} from './beer-list-actions-types';

const beerItemsRequested = () => {
  return {
    type: FETCH_BEER_LIST_REQUEST
  };
};

const beerItemsLoaded = (beerItems) => {
  return {
    type: FETCH_BEER_LIST_SUCCESS,
    payload: beerItems.data
  };
};

const beerItemsLoadingFailed = (error) => {
  return {
    type: FETCH_BEER_LIST_FAILURE,
    payload: error
  };
};

const fetchBeerItems = () => async (dispatch) => {
  try {
    dispatch(beerItemsRequested());
    const beerItems = await getBeerService().fetchBeerItems();
    dispatch(beerItemsLoaded(beerItems));
  } catch (error) {
    dispatch(beerItemsLoadingFailed(error));
  }
};

export {
  fetchBeerItems
};
