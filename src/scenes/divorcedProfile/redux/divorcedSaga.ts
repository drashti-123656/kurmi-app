import {showMessage} from 'react-native-flash-message';
import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {
  fetchDivorcedDataFail,
  fetchDivorcedDataStarted,
  fetchDivorcedDataSuccess,
} from './divorcedReducer';

export function* divorcedStatus(action) {
  const payload = action.payload;

  fetchDivorcedDataStarted({});

  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.DIVORCED_DATA,
    payload,
  );

  if (ok) {
    yield put(fetchDivorcedDataSuccess(data.data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchDivorcedDataFail(problem);
  }
}
