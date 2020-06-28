import {
  FETCH_BEER_FAVOURITES_ITEMS_REQUEST,
  FETCH_BEER_FAVOURITES_ITEMS_SUCCESS,
  FETCH_BEER_FAVOURITES_ITEMS_FAILURE
} from '../actions/beer-favourites-actions/beer-favourites-actions-types';

const initialState = {
  isLoading: false,
  hasError: null,
  pages: 0,
  items: []
};

const beerFavouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEER_FAVOURITES_ITEMS_REQUEST:
      return {
        isLoading: true,
        hasError: null,
        pages: 0,
        items: []
      };
    case FETCH_BEER_FAVOURITES_ITEMS_SUCCESS:
      return {
        isLoading: false,
        hasError: null,
        items: [...action.payload.items],
        pages: action.payload.pages
      };
    case FETCH_BEER_FAVOURITES_ITEMS_FAILURE:
      return {
        isLoading: true,
        hasError: action.payload,
        items: [],
        pages: 0
      };
    default: {
      return state;
    }
  }
};

export default beerFavouritesReducer;
