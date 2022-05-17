import {call, put} from 'redux-saga/effects';
import apiClient from './../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {showMessage} from 'react-native-flash-message';
import {changepassword} from './changepasswordReducer';

export function* changePassword(action) {
  const payload = action.payload;
  const response = yield call(apiClient.post, API_URL.CHANGE_PASSWORD, payload);
  if (response.ok) {
    yield put(changepassword(payload));

    showMessage({
      message: 'Successfull',
      description: ' Your password changed successfully',
      type: 'success',
    });
  } else {
    showMessage({
      message: 'Ops, something went Wrong',
      type: 'danger',
    });
  }
}
