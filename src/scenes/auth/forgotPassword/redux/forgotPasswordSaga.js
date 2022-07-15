import {call, put} from 'redux-saga/effects';

import apiClient, {setToken} from '../../../../services/httpServices';
import {API_URL} from '../../../../services/webConstants';
import {showMessage} from 'react-native-flash-message';
import {
  fetchLoginDataFail,
  fetchLoginDataStarted,
  fetchLoginDataSuccess,
} from './authReducer';
import { ForgotPasswordFailed, ForgotPasswordStarted, ForgotPasswordSuccess } from './forgotPasswordReducer';
import {navigate} from '../../../../navigation/RootNavigation';


export function* forgotPassword(action) {
  const payload = action.payload;
  console.log(payload);

  yield put(ForgotPasswordStarted({}));

  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.FORGOT_PASSWORD,
    payload,
  );
  
  if (ok) {
    yield put(ForgotPasswordSuccess(data));
    navigate('Login')

    
    showMessage({
      message: 'Password has been sent your registered email address ',
      type: 'success',
    });
  } else {
   
    yield put(ForgotPasswordFailed({}));
    showMessage({
      message: 'E-mail does not match',
      type: 'danger',
    });

    
  }
}
