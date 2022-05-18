import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {
  fetchOthersProfileDataFail,
  fetchOthersProfileDataStarted,
  fetchOthersProfileDataSuccess,
} from './OthersDetailReducer';

export function* otherProfileDetails(action) {
  const payload = action.payload;

  yield put(fetchOthersProfileDataStarted({}));
  const {data, ok, problem} = yield call(
    apiClient.get,
    `${API_URL.OTHER_PROFILE_DETAILS}/${payload}`,
  );

  if (ok) {
    yield put(fetchOthersProfileDataSuccess(data.data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchOthersProfileDataFail(problem);
  }
}
