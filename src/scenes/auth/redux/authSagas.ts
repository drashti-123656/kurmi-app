import {call, put} from 'redux-saga/effects';
import {navigate} from '../../../navigation/RootNavigation';
import apiClient from './../../../services/httpServices';
import {API_URL} from './../../../services/webConstants';
import {showMessage, hideMessage} from 'react-native-flash-message';
import { login } from '../login/loginReducer';
export function* logUser(action) {
  const payload = action.payload;
  const response = yield call(apiClient.post, API_URL.LOG_USER, payload);
  
  if (response.ok) {
    navigate('DrawerNavigation');
  }
}

export function* loginUser(action) {
  const payload = action.payload;
  const response = yield call(apiClient.post, API_URL.LOG_IN, payload);

  if (response.ok) {
    yield put(login(payload));
    navigate('DrawerNavigation');
   
  }
  else{
    showMessage({
      message: 'Please Register Your Account!!',
      type: 'danger',
    });
  }
}
