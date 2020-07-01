import {
  ADD_BEER_ID_TO_FAVOURITES_SUCCESS,
  ADD_BEER_ID_TO_FAVOURITES_FAILURE,
  REMOVE_BEER_ID_FROM_FAVOURITES_SUCCESS,
  REMOVE_BEER_ID_FROM_FAVOURITES_FAILURE,
  FETCH_BEER_IDS_LIST_FAVOURITES_SUCCESS,
  FETCH_BEER_IDS_LIST_FAVOURITES_FAILURE,
  IMAGE_UPLOAD_FAILURE
} from '../actions/profile-actions/profile-actions-types';

const initialState = {
  favourites: [],
  hasError: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BEER_ID_TO_FAVOURITES_SUCCESS:
    case FETCH_BEER_IDS_LIST_FAVOURITES_SUCCESS:
    case REMOVE_BEER_ID_FROM_FAVOURITES_SUCCESS:
      return {
        hasError: null,
        favourites: [...action.payload]
      };
    case ADD_BEER_ID_TO_FAVOURITES_FAILURE:
    case REMOVE_BEER_ID_FROM_FAVOURITES_FAILURE:
    case FETCH_BEER_IDS_LIST_FAVOURITES_FAILURE:
    case IMAGE_UPLOAD_FAILURE:
      return {
        hasError: action.payload,
        favourites: []
      };
    default: {
      return state;
    }
  }
};

export default profileReducer;
