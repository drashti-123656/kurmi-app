import {call, put} from 'redux-saga/effects';
import {navigate} from '../../../../navigation/RootNavigation';
import apiClient, {setToken} from './../../../../services/httpServices';
import {API_URL} from './../../../../services/webConstants';
import {savingStarted, savingSuccess} from './whatsAppReducer';

export function* logUser(action) {
  yield put(savingStarted({}));
  const payload = action.payload;
  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.LOG_USER,
    payload,
  );

  if (ok) {
    yield put(savingSuccess({}));
    navigate('DashboardNavigation');
  }
}
