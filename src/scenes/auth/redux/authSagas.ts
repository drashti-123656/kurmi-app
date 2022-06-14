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
  console.log('logggg====>', data);
  if (ok) {
    yield put(fetchLoginDataSuccess(data.token));

    setToken(data.token);
    showMessage({
      message: 'successfully Logged In',
      type: 'success',
    });
  } else {
    console.log('worngPassword===>>', data.User);
    yield put(fetchLoginDataFail({}));
    showMessage({
      message: 'Please Register Your Account!!',
      type: 'danger',
    });

    // fetchLoginDataFail(problem);
  }
}
