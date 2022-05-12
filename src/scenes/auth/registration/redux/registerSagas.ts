import {call, put} from 'redux-saga/effects';
import apiClient from './../../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../../services/webConstants';
import {
  fetchAuspiciousDropdownSuccess,
  fetchCityDropdownSuccess,
  fetchCountryDropdownSuccess,
  fetchEducationDropdownSuccess,
  fetchGotraDropdownSuccess,
  fetchJobDropdownSuccess,
  fetchLandDropdownSuccess,
  fetchMaritalstatusDropdownSuccess,
  fetchProfilemakerDropdownSuccess,
  fetchStateDropdownSuccess,
  fetchZodiacDropdownSuccess,
  register,
  registrationsFail,
  registrationStarted,
  registrationSuccess,
} from './registrationReducer';
import {navigate} from '../../../../navigation/RootNavigation';
import {loginSuccess} from '../../redux/authReducer';

export function* registerUser(action) {
  const payload = action.payload;
  registrationStarted({});
  const response = yield call(apiClient.post, API_URL.REGISTER_USER, payload);

  if (response.ok) {
    showMessage({
      message: 'successfully registered',
      type: 'success',
    });
    yield put(loginSuccess(response.data.User));
    yield put(registrationSuccess({}));
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

export function* gotraDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );

  if (response.ok) {
    yield put(fetchGotraDropdownSuccess(response.data.data));
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
  
  const apiBody = {
    where: {
      userEmail: payload.userEmail,
      userMobileNo: payload.userMobileNo,
    },
  };
  const response = yield call(apiClient.post, API_URL.VERIFY_USER, apiBody);
  
  if (response.ok) {
   
    yield put(register(payload));
    navigate('Personalinformation');
  } else {
    showMessage({
      message: 'Ops, There is already a user with this E-mail and Mobile Number',
      type: 'danger',
    });
  }
}

export function* profilemakerDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );
  
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


export function* landDropdown(action) {
  const payload = action.payload;

  const response = yield call(
    apiClient.post,
    API_URL.FETCH_SIGN_DROPDWON,
    payload,
  );

  if (response.ok) {
    yield put(fetchLandDropdownSuccess(response.data.data));
  }
}
