import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {fetchmyProfileDataStarted,fetchmyProfileDataSuccess,fetchloadingDataFail} from './MyProfileReducer';

export function* myProfileDetails(action) {
  const payload = action.payload;
  fetchmyProfileDataStarted({});
  const {data,ok,problem}= yield call(
    apiClient.get,
   `${API_URL.MY_PROFILE_DETAILS}`,
  );
 
  if (ok) {
   yield put(fetchmyProfileDataSuccess(data.data));
  }
  else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchloadingDataFail(problem);
  }
 
  
}
