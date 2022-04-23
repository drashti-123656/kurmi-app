import {all, takeLatest} from 'redux-saga/effects';
import {LOG_IN, LOG_USER} from '../scenes/auth/redux/authActions';
import {logUser} from '../scenes/auth/redux/authSagas';
import { CONTACT_USER } from '../scenes/contact/redux/contactAction';
import { contactUser } from '../scenes/contact/redux/contactSaga';
import { loginUser } from '../scenes/auth/redux/authSagas';
import { auspiciousDropdown, registerUser, zodiacDropDowns } from '../scenes/auth/registration/redux/registerSagas';
import { FETCH_AUSPICIOUS_DROPDOWN, FETCH_ZODIC_SIGN, REGISTER_USER } from '../scenes/auth/registration/redux/registrationActions';

export default function* sagas() {
  yield all([
    takeLatest(LOG_USER, logUser),
    takeLatest(CONTACT_USER, contactUser),
    takeLatest(LOG_IN, loginUser),
    takeLatest(REGISTER_USER, registerUser),
    takeLatest(FETCH_ZODIC_SIGN, zodiacDropDowns),
    takeLatest(FETCH_AUSPICIOUS_DROPDOWN, auspiciousDropdown),
    
  ]);
}