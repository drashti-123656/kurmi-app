import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {
  fetchmyProfileDataStarted,
  fetchmyProfileDataSuccess,
  fetchloadingDataFail,
} from './MyProfileReducer';

export function* myProfileDetails(action) {
  const payload = action.payload;
  yield put(fetchmyProfileDataStarted({}));
  const {data, ok, problem} = yield call(
    apiClient.get,
    `${API_URL.MY_PROFILE_DETAILS}`,
  );
  if (ok) {
    yield put(fetchmyProfileDataSuccess(data.data));
  } else {
    yield put(fetchloadingDataFail({}));
  }
}
