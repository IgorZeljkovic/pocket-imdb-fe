import { call, put } from 'redux-saga/effects';
import { push, go } from 'connected-react-router';

import { authUser, loginError, registerError } from '../actions/AuthActions';
import AuthService from '../../services/AuthService';

export function* userLogin({ payload }) {
  try {
    yield call(AuthService.login, payload);

    yield put(authUser(true));
    yield put(push('/home'));
    yield put(go());
  } catch ({ response }) {
    const errors = response.data.errors || response.data.error;

    yield put(loginError(errors));
  }
}

export function* userLogout() {
  try {
    yield call(AuthService.logout)

    yield put(authUser(false));
    yield put(push('/login'));
    yield put(go());
  } catch (error) {
    console.log(error)
  }
}

export function* userRegister({ payload }) {
  try {
    yield call(AuthService.signup, payload);

    yield put(push('/login'));
    yield put(go());
  } catch ({ response }) {
    const { errors } = response.data;

    yield put(registerError(errors));
  }
}
