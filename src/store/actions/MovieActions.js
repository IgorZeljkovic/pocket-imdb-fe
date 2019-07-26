import { 
  GET_MOVIES,
  SET_MOVIES, 
  GET_MOVIES_PAGE,
  SET_SEARCH_QUERY
} from './ActionTypes';

export const getMovies = payload => {
  return {
    type: GET_MOVIES,
    payload
  };
};

export const setMovies = payload => {
  return {
    type: SET_MOVIES,
    payload
  };
};

export const getPaginatedMovies = url => {
  return {
    type: GET_MOVIES_PAGE,
    payload: url
  }
}

export const setSearchQuery = payload => {
  return {
    type: SET_SEARCH_QUERY,
    payload
  }
}

