import {call, put} from 'redux-saga/effects';
import apiClient from './../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {showMessage} from 'react-native-flash-message';
import {
  isChangePasswordFail,
  isChangePasswordStarted,
  isChangePasswordSuccess,
} from './changepasswordReducer';

export function* changePassword(action) {
  const payload = action.payload;

  yield put(isChangePasswordStarted({}));

  const {ok} = yield call(apiClient.post, API_URL.CHANGE_PASSWORD, payload);

  if (ok) {
    yield put(isChangePasswordSuccess(payload));
    console.log('change password======>>>>>>>', payload);

    showMessage({
      message: 'Successfull',
      description: ' Your password changed successfully',
      type: 'success',
    });
  } else {
    yield put(isChangePasswordFail({}));
    showMessage({
      message: 'Ops, something went Wrong',
      type: 'danger',
    });
  }
}
