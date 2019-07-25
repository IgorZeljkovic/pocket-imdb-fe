import { all, takeLatest } from 'redux-saga/effects';
import {
  GET_MOVIES,
  GET_MOVIES_PAGE,
  LOGIN, LOGOUT,
  REGISTER,
  NEW_VOTE,
  REMOVE_VOTE,
  UPDATE_VOTE
} from '../actions/ActionTypes';
import { userLogin, userLogout, userRegister } from './AuthSagas';
import { moviesGet, moviesPageGet, moviesVoteNew, moviesVoteRemove, moviesVoteUpdate } from './MovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(LOGOUT, userLogout),
    takeLatest(GET_MOVIES_PAGE, moviesPageGet),
    takeLatest(NEW_VOTE, moviesVoteNew),
    takeLatest(REMOVE_VOTE, moviesVoteRemove),
    takeLatest(UPDATE_VOTE, moviesVoteUpdate)
  ]);
}
