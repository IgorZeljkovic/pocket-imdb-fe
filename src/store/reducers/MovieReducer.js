import { SET_MOVIES, SET_SEARCH_QUERY } from '../actions/ActionTypes';

const initialState = {
  all: [],
  pagination: {},
  searchQuery: {}
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload.data, pagination: action.payload };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      }
    default:
      return state;
  }
};

export default movieReducer;
