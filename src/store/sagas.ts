import {all, takeLatest} from 'redux-saga/effects';
import {LOG_IN, LOG_USER} from '../scenes/auth/redux/authActions';
import {logUser} from '../scenes/auth/redux/authSagas';
import { loginUser } from '../scenes/auth/redux/authSagas';
import { registerUser } from '../scenes/auth/registration/redux/registerSagas';
import { REGISTER_USER } from '../scenes/auth/registration/redux/registrationActions';

export default function* sagas() {
  yield all([
    takeLatest(LOG_USER, logUser),
    takeLatest(LOG_IN, loginUser),
    takeLatest(REGISTER_USER, registerUser),
    
  ]);
}