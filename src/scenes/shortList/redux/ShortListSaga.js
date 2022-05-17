import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import { fetchShortlistedDataSuccess, fetchShortlistedUserDataFail, fetchShortlistedUserDataStarted, shortListSuccess } from './ShortListReducer';



export function* shortListProfile(action) {
  const payload = action.payload;
  const {ok, problem, data} = yield call(
    apiClient.post,
    API_URL.SHORTED_USER,
    payload,
  );
  console.log('shortlist',data)

  if (ok) {
    showMessage({
      message: 'Profile is sortlisted',
      type: 'info',
    });
    yield put(shortListSuccess(data));
  }
}

export function* shortlistedUsers(action) {
  const payload = action.payload;
  fetchShortlistedUserDataStarted({});
  const {ok, problem, data} = yield call(
    apiClient.post,
    API_URL.SHORT_LISTEDD_USERS,
    payload,
  );
  console.log('SAD==>>',data)

  if (ok) {
    yield put(fetchShortlistedDataSuccess(data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchShortlistedUserDataFail(problem);
  }
}
