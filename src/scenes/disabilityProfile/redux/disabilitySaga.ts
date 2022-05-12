import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import { API_URL } from '../../../services/webConstants';
import { disability } from './disabilityReducer';

export function* disabilityStatus(action) {
  const payload = action.payload;

  const response = yield call(apiClient.post, API_URL.DISABILITY_DATA, payload);
 
  if (response.ok) {
    yield put(disability(response.data.data));
  }
}
