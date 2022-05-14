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

  fetchDisabilityDataStarted({});
  
  const response = yield call(apiClient.post, API_URL.DISABILITY_DATA, payload);

  if (response.ok) {
    yield put(fetchDisabilityDataSuccess(response.data.data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchDisabilityDataFail(response.problem);
  }
}
