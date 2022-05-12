import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import { API_URL } from '../../../services/webConstants';
import { widowed } from './widowedReducer';

export function* widowedStatus(action) {
  const payload = action.payload;

  const response = yield call(apiClient.post, API_URL.WIDOWED_DATA, payload);
 
  if (response.ok) {
    yield put(widowed(response.data.data));
  }
}
