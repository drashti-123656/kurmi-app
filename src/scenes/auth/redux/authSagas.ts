import {call, put} from 'redux-saga/effects';
import {navigate} from '../../../navigation/RootNavigation';
import apiClient, { setToken } from './../../../services/httpServices';
import {API_URL} from './../../../services/webConstants';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {login} from '../login/loginReducer';
import {loginSuccess} from './authReducer';
import {registrationSuccess} from '../registration/redux/registrationReducer';

export function* logUser(action) {
  const payload = action.payload;
  const response = yield call(apiClient.post, API_URL.LOG_USER, payload);

  if (response.ok) {
    navigate('DashboardNavigation');
  }
}

export function* loginUser(action) {
  const payload = action.payload;
  const {ok, problem, data} = yield call(
    apiClient.post,
    API_URL.LOG_IN,
    payload,
  );
  console.log('loginresponse', data.token);
  if (ok) {
    showMessage({
      message: 'successfully Logged In',
      type: 'success',
    });

      yield put(loginSuccess(data.token));
    setToken(data.token);

  } else {
    showMessage({
      message: 'Please Register Your Account!!',
      type: 'danger',
    });
  }
}
