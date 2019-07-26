import { 
  GET_MOVIES,
  SET_MOVIES, 
  GET_MOVIES_PAGE,
  SET_SEARCH_QUERY,
  SET_VOTED_MOVIE,
  NEW_VOTE,
  REMOVE_VOTE,
  UPDATE_VOTE
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

export const setVotedMovie = payload => {
  return {
    type: SET_VOTED_MOVIE,
    payload
  }
}
