import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import { API_URL } from '../../../services/webConstants';
import { widower } from './widowerReducer';

export function* widowerStatus(action) {
  const payload = action.payload;

  const {data, ok, problem} = yield call(apiClient.post, API_URL.WIDOWER_DATA, payload);
 
  if (ok) {
    yield put(widower(data.data));
  }
}
