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

    if(response.status === 401){
      AuthService.api.unauthorizedCallback();
    }

    yield put(loginError(errors));
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
