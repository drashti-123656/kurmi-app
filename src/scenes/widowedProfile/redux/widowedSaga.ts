import {showMessage} from 'react-native-flash-message';
import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {
  fetchWidowedDataFail,
  fetchWidowedDataStarted,
  fetchWidowedDataSuccess,
} from './widowedReducer';

export function* widowedStatus(action) {
  const payload = action.payload;

  fetchWidowedDataStarted({});

  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.WIDOWED_DATA,
    payload,
  );

  if (ok) {
    yield put(fetchWidowedDataSuccess(data.data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchWidowedDataFail(problem);
  }
}
