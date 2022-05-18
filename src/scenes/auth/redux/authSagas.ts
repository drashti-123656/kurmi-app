import {call, put} from 'redux-saga/effects';
import {navigate} from '../../../navigation/RootNavigation';
import apiClient, {setToken} from './../../../services/httpServices';
import {API_URL} from './../../../services/webConstants';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {
  fetchLoginDataFail,
  fetchLoginDataStarted,
  fetchLoginDataSuccess,
} from './authReducer';

export function* logUser(action) {
  const payload = action.payload;
  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.LOG_USER,
    payload,
  );

  if (ok) {
    navigate('DashboardNavigation');
  }
}

export function* loginUser(action) {
  const payload = action.payload;

  yield put(fetchLoginDataStarted({}));

  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.LOG_IN,
    payload,
  );
  if (ok) {
    yield put(fetchLoginDataSuccess(data.User));
    setToken(data.token);
    showMessage({
      message: 'successfully Logged In',
      type: 'success',
    });

   
  } else {
    showMessage({
      message: 'Please Register Your Account!!',
      type: 'danger',
    });
    fetchLoginDataFail(problem);
  }
}
