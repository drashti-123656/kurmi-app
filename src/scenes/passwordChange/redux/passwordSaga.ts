import {call, put} from 'redux-saga/effects';
import apiClient from './../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {navigate} from '../../../navigation/RootNavigation';
import {showMessage} from 'react-native-flash-message';
import {Alert} from 'react-native';
import {changepassword} from './changepasswordReducer';

export function* changePassword(action) {
  const payload = action.payload;
  console.log('payloaddddd=====>', payload);
  const response = yield call(apiClient.post, API_URL.CHANGE_PASSWORD, payload);
  console.log('password =====>', response.data);
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
