import getBeerService from '../../../services/beer-service';
import {
  FETCH_BEER_FAVOURITES_ITEMS_REQUEST,
  FETCH_BEER_FAVOURITES_ITEMS_SUCCESS,
  FETCH_BEER_FAVOURITES_ITEMS_FAILURE
} from './beer-favourites-actions-types';

const fetchBeerFavouritesItems = (page) => async (dispatch) => {
  try {
    dispatch(beerFavouritesItemsFetchRequest());
    const beerItems = await getBeerService().getFavouritesBeerItems(page);
    dispatch(beerFavouritesItemsFetchSuccess(beerItems));
  } catch (error) {
    dispatch(beerFavouritesItemsFetchFailure(error));
  }
};

const beerFavouritesItemsFetchRequest = () => {
  return {
    type: FETCH_BEER_FAVOURITES_ITEMS_REQUEST
  };
};

const beerFavouritesItemsFetchSuccess = (beerItems) => {
  return {
    type: FETCH_BEER_FAVOURITES_ITEMS_SUCCESS,
    payload: beerItems
  };
};

const beerFavouritesItemsFetchFailure = (error) => {
  return {
    type: FETCH_BEER_FAVOURITES_ITEMS_FAILURE,
    payload: { ...error }
  };
};

export {
  fetchBeerFavouritesItems
};
