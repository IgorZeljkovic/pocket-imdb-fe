import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovies, setSearchQuery } from '../actions/MovieActions';

export function* moviesGet({ payload }) {
  try {
    const { data } = yield call(movieService.getMovies, payload);

    yield put(setMovies(data));
    yield put(setSearchQuery(payload));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* moviesPageGet({ payload }) {
  try {
    const { data } = yield call(movieService.getMoviesPage, payload);

    yield put(setMovies(data));
  } catch (error) {
    console.log({ error });
  }
}