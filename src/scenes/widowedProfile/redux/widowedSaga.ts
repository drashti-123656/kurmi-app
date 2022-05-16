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
  
  const response = yield call(apiClient.post, API_URL.WIDOWED_DATA, payload);

  if (response.ok) {
    yield put(fetchWidowedDataSuccess(response.data.data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchWidowedDataFail(response.problem);
  }
}
