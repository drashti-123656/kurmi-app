import {call, put} from 'redux-saga/effects';
import apiClient from './../../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../../services/webConstants';
import {
  fetchAuspiciousDropdownSuccess,
  fetchEducationDropdownSuccess,
  fetchJobDropdownSuccess,
  fetchMaritalstatusDropdownSuccess,
  fetchZodiacDropdownSuccess,
  register,
  registrationsFail,
  registrationSuccess,
} from './registrationReducer';

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
  console.log('sad', payload);
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
  console.log('payload', payload);
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
  console.log('payload', payload);
  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );
  console.log('marital=>', response);
  if (response.ok) {
    yield put(fetchMaritalstatusDropdownSuccess(response.data.data));
  }
}

export function* educationDropdown(action) {
  const payload = action.payload;
  console.log('payload', payload);
  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );
  console.log('education=>', response);
  if (response.ok) {
    yield put(fetchEducationDropdownSuccess(response.data.data));
  }
}

export function* jobDropdown(action) {
  const payload = action.payload;
  console.log('payload', payload);
  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );
  console.log('job=>', response.data.data);
  if (response.ok) {
    yield put(fetchJobDropdownSuccess(response.data.data));
  }
}

export function* registerUserVerification(action) {
  const payload = action.payload;
  console.log('payload', payload)
  const response = yield call(apiClient.post, API_URL.VERIFY_USER, payload);
  if (response.ok) {
    showMessage({
        message: 'User already Registered',
        type: "success", 
      });
     put(register(payload));
  } else {
    showMessage({
        message: 'Ops, something went wrong',
        type: "danger", 
      });
    registrationsFail(response.problem);
  }
}
