import {all, takeLatest} from 'redux-saga/effects';
import {LOG_USER} from '../scenes/auth/redux/authActions';
import {logUser} from '../scenes/auth/redux/authSagas';
import { CONTACT_USER } from '../scenes/contact/redux/contactAction';
import { contactUser } from '../scenes/contact/redux/contactSaga';

export default function* sagas() {
  yield all([
    takeLatest(LOG_USER, logUser),
    takeLatest(CONTACT_USER, contactUser)
  ]);
}