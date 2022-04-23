import {all, takeLatest} from 'redux-saga/effects';
import {LOG_IN, LOG_USER} from '../scenes/auth/redux/authActions';
import {logUser} from '../scenes/auth/redux/authSagas';
import {CONTACT_USER} from '../scenes/contact/redux/contactAction';
import {contactUser} from '../scenes/contact/redux/contactSaga';
import {loginUser} from '../scenes/auth/redux/authSagas';
import {
  auspiciousDropdown,
  cityDropdown,
  countryDropdown,
  educationDropdown,
  jobDropdown,
  martialstatusDropdown,
  profilemakerDropdown,
  registerUser,
  registerUserVerification,
  stateDropdown,
  zodiacDropDowns,
} from '../scenes/auth/registration/redux/registerSagas';
import {
  FETCH_AUSPICIOUS_DROPDOWN,
  FETCH_EDUCATION_DROPDOWN,
  FETCH_JOB_DROPDOWN,
  FETCH_MARITALSTATUS_DROPDOWN,
  FETCH_PROFILECREATER_DROPDOWN,
  FETCH_ZODIC_SIGN,
  REGISTER_USER,
  VERIFY_USER,
} from '../scenes/auth/registration/redux/registrationActions';

export default function* sagas() {
  yield all([
    takeLatest(LOG_USER, logUser),
    takeLatest(CONTACT_USER, contactUser),
    takeLatest(LOG_IN, loginUser),
    takeLatest(REGISTER_USER, registerUser),
    takeLatest(FETCH_ZODIC_SIGN, zodiacDropDowns),
    takeLatest(FETCH_AUSPICIOUS_DROPDOWN, auspiciousDropdown),
    takeLatest(FETCH_MARITALSTATUS_DROPDOWN, martialstatusDropdown),
    takeLatest(FETCH_EDUCATION_DROPDOWN, educationDropdown),
    takeLatest(FETCH_JOB_DROPDOWN, jobDropdown),
    takeLatest(VERIFY_USER, registerUserVerification),
    takeLatest(FETCH_PROFILECREATER_DROPDOWN, profilemakerDropdown),

    takeLatest(FETCH_PROFILECREATER_DROPDOWN, countryDropdown),
    takeLatest(FETCH_PROFILECREATER_DROPDOWN, stateDropdown),
    takeLatest(FETCH_PROFILECREATER_DROPDOWN, cityDropdown),
  ]);
}
