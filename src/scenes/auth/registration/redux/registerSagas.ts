import {call, put} from 'redux-saga/effects';
import apiClient from './../../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../../services/webConstants';
import {
  fetchAuspiciousDropdownSuccess,
  fetchZodiacDropdownSuccess,
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
  console.log('payload', payload)
  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );
  console.log('response=>' , response)
  if (response.ok) {
    
    yield put(fetchAuspiciousDropdownSuccess(response.data.data));
  }
}
