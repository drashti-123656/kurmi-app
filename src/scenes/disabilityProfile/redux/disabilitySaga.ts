import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {disability} from './disabilityReducer';

export function* disabilityStatus(action) {
  const payload = action.payload;

  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.DISABILITY_DATA,
    payload,
  );

  if (ok) {
    yield put(disability(data.data));
  }
}
