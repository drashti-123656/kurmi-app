import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import { API_URL } from '../../../services/webConstants';
import { divorce } from './divorcedReducer';

export function* divorcedStatus(action) {
  const payload = action.payload;

  const response = yield call(apiClient.post, API_URL.DIVORCED_DATA, payload);
 
  if (response.ok) {
    yield put(divorce(response.data.data));
  }
}
