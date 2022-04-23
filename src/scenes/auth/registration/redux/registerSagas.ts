import {call, put} from 'redux-saga/effects';
import apiClient from './../../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../../services/webConstants';
import {
  fetchAuspiciousDropdownSuccess,
  fetchCityDropdownSuccess,
  fetchCountryDropdownSuccess,
  fetchEducationDropdownSuccess,
  fetchJobDropdownSuccess,
  fetchMaritalstatusDropdownSuccess,
  fetchProfilemakerDropdownSuccess,
  fetchStateDropdownSuccess,
  fetchZodiacDropdownSuccess,
  register,
  registrationsFail,
  registrationSuccess,
} from './registrationReducer';
import { navigate } from '../../../../navigation/RootNavigation';

export function* registerUser(action) {
  const payload = action.payload;
  const response = yield call(apiClient.post, API_URL.REGISTER_USER, payload);
  if (response.ok) {
    showMessage({
      message: 'successfully registered',
      type: 'success',
    });
    registrationSuccess({});
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    registrationsFail(response.problem);
  }
}

export function* zodiacDropDowns(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );

  if (response.ok) {
    yield put(fetchZodiacDropdownSuccess(response.data.data));
  }
}

export function* auspiciousDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );

  if (response.ok) {
    yield put(fetchAuspiciousDropdownSuccess(response.data.data));
  }
}

export function* martialstatusDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );

  if (response.ok) {
    yield put(fetchMaritalstatusDropdownSuccess(response.data.data));
  }
}

export function* educationDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );

  if (response.ok) {
    yield put(fetchEducationDropdownSuccess(response.data.data));
  }
}

export function* jobDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );

  if (response.ok) {
    yield put(fetchJobDropdownSuccess(response.data.data));
  }
}

export function* registerUserVerification(action) {
  const payload = action.payload;

  const response = yield call(apiClient.post, API_URL.VERIFY_USER, payload);
  if (response.ok) {
    showMessage({
      message: 'User already Registered',
      type: 'danger',
    });
   
    
    put(register(payload));
  } else {
    
    navigate('Personalinformation');
    registrationsFail(response.problem);
  }
}

export function* profilemakerDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );
  console.log('response=>', response);
  if (response.ok) {
    yield put(fetchProfilemakerDropdownSuccess(response.data.data));
  }
}

export function* countryDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );

  if (response.ok) {
    yield put(fetchCountryDropdownSuccess(response.data.data));
  }
}

export function* stateDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );

  if (response.ok) {
    yield put(fetchStateDropdownSuccess(response.data.data));
  }
}

export function* cityDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );

  if (response.ok) {
    yield put(fetchCityDropdownSuccess(response.data.data));
  }
}
