import { GET_MOVIES, SET_MOVIES, GET_MOVIES_PAGE } from './ActionTypes';

export const getMovies = () => {
  return {
    type: GET_MOVIES
  };
};

export const setMovies = payload => {
  return {
    type: SET_MOVIES,
    payload
  };
};

export const getMoviesPage = url => {
  return {
    type: GET_MOVIES_PAGE,
    payload: url
  }
}
