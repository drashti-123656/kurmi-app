import {call} from 'redux-saga/effects';
import {navigate} from '../../../navigation/RootNavigation';
import apiClient from './../../../services/httpServices';
import {API_URL} from './../../../services/webConstants';
export function* logUser(action) {
  const payload = action.payload;
  const response = yield call(apiClient.post, API_URL.LOG_USER, payload);
  if(response.ok){
    navigate('DashboardNavigation');
  } 
}
