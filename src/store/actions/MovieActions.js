import { 
  GET_MOVIES,
  SET_MOVIES, 
  GET_MOVIES_PAGE,
  SET_SEARCH_QUERY,
  SET_MOVIE,
  NEW_VOTE,
  REMOVE_VOTE,
  UPDATE_VOTE,
  VISIT_MOVIE,
  FILTER_MOVIES
} from './ActionTypes';

export const getMovies = payload => {
  return {
    type: GET_MOVIES,
    payload: payload
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

export const newVote = payload => {
  return {
    type: NEW_VOTE,
    payload
  }
}

export const removeVote = payload => {
  return {
    type: REMOVE_VOTE,
    payload
  }
}

export const updateVote = payload => {
  return {
    type: UPDATE_VOTE,
    payload
  }
}

export const setMovie = payload => {
  return {
    type: SET_MOVIE,
    payload
  }
}

export const visitMovie = payload => {
  return {
    type: VISIT_MOVIE,
    payload
  }
}

export const filterMovies = payload => {
  return {
    type: FILTER_MOVIES,
    payload
  }
}