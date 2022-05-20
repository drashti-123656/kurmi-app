import {showMessage} from 'react-native-flash-message';
import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {
  fetchWidowerDataFail,
  fetchWidowerDataStarted,
  fetchWidowerDataSuccess,
} from './widowerReducer';

export function* widowerStatus(action) {
  const payload = action.payload;

  yield put(fetchWidowerDataStarted({}));

  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.WIDOWER_DATA,
    payload,
  );

  if (ok) {
    yield put(fetchWidowerDataSuccess(data.data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchWidowerDataFail(problem);
  }
}
