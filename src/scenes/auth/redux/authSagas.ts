import {call, put} from 'redux-saga/effects';

import apiClient, {setToken} from './../../../services/httpServices';
import {API_URL} from './../../../services/webConstants';
import {showMessage} from 'react-native-flash-message';
import {
  fetchLoginDataFail,
  fetchLoginDataStarted,
  fetchLoginDataSuccess,
} from './authReducer';

export function* loginUser(action) {
  const payload = action.payload;

  yield put(fetchLoginDataStarted({}));

  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.LOG_IN,
    payload,
  );
  if (ok) {
    yield put(fetchLoginDataSuccess(data.token));

    setToken(data.token);
    showMessage({
      message: 'successfully Logged In',
      type: 'success',
    });
  } else {
    yield put(fetchLoginDataFail({}));
    showMessage({
      message: 'Please Check Email Or Password!',
      type: 'danger',
    });

    // fetchLoginDataFail(problem);
  }
}
