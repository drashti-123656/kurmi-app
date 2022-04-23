import {call} from 'redux-saga/effects';
import {navigate} from '../../../navigation/RootNavigation';
import apiClient from './../../../services/httpServices';
import {API_URL} from './../../../services/webConstants';
import {showMessage, hideMessage} from 'react-native-flash-message';

export function* logUser(action) {
  const payload = action.payload;
  const response = yield call(apiClient.post, API_URL.LOG_USER, payload);
  console.log('payload==>>',response)
  console.log('sad==>>',payload)
  if (response.ok) {
    navigate('DashboardNavigation');
  }
}

export function* loginUser(action) {
  const payload = action.payload;
  const response = yield call(apiClient.post, API_URL.LOG_IN, payload);

  if (response.ok) {
    showMessage({
      message: "Successfully, You logged in",
      type: "success",
      
    });
  }
}
