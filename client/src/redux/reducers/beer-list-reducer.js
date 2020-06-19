import {
  FETCH_BEER_LIST_REQUEST,
  FETCH_BEER_LIST_SUCCESS,
  FETCH_BEER_LIST_FAILURE,
  BEER_LIST_CLEARED
} from '../actions/beer-list-actions/beer-list-actions-types';

const initialState = {
  items: [],
  hasError: null,
  isLoading: false,
  hasItems: true
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
        isLoading: false,
        hasItems: !!action.payload.length
      };
    case FETCH_BEER_LIST_FAILURE:
      return {
        items: [],
        isLoading: false,
        hasEror: action.payload,
        hasItems: true
      };
    case BEER_LIST_CLEARED:
      return {
        items: [],
        isLoading: false,
        hasEror: action.payload,
        hasItems: true
      };
    default: {
      return state;
    }
  }
};

export default beerReducer;
