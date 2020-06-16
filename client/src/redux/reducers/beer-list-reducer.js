import {
  FETCH_BEER_LIST_REQUEST,
  FETCH_BEER_LIST_SUCCESS,
  FETCH_BEER_LIST_FAILURE
} from '../actions/beer-list-actions/beer-list-actions-types';

const initialState = {
  items: [],
  hasError: null,
  isLoading: false
};

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEER_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_BEER_LIST_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        isLoading: false
      };
    case FETCH_BEER_LIST_FAILURE:
      return {
        items: [],
        isLoading: false,
        hasEror: action.payload
      };
    default: {
      return state;
    }
  }
};

export default beerReducer;
