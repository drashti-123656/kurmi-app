import {showMessage} from 'react-native-flash-message';
import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {
  fetchDisabilityDataFail,
  fetchDisabilityDataStarted,
  fetchDisabilityDataSuccess,
} from './disabilityReducer';

export function* disabilityStatus(action) {
  const payload = action.payload;

  yield put(fetchDisabilityDataStarted({}));

  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.DISABILITY_DATA,
    payload,
  );

  if (ok) {
    yield put(fetchDisabilityDataSuccess(data.data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchDisabilityDataFail(problem);
  }
}
