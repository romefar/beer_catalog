import {
  FETCH_BEER_ITEM_REQUEST,
  FETCH_BEER_ITEM_SUCCESS,
  FETCH_BEER_ITEM_FAILURE
} from '../actions/beer-item-actions/beer-item-actions-types';

const initialState = {
  item: null,
  hasError: null,
  isLoading: false
};

const beerItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEER_ITEM_REQUEST:
      return {
        item: null,
        hasError: null,
        isLoading: true
      };
    case FETCH_BEER_ITEM_SUCCESS:
      return {
        item: action.payload,
        hasError: null,
        isLoading: false
      };
    case FETCH_BEER_ITEM_FAILURE:
      return {
        item: null,
        hasError: action.payload,
        isLoading: false
      };
    default: {
      return state;
    }
  }
};

export default beerItemReducer;
