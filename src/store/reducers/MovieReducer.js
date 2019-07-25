import { SET_MOVIES, SET_SEARCH_QUERY, SET_MOVIE } from '../actions/ActionTypes';

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
    case SET_MOVIE:
      return {
        ...state,
        all: state.all.map(movie => movie.id === action.payload.id ? action.payload : movie)
      }
    default:
      return state;
  }
};

export default movieReducer;
