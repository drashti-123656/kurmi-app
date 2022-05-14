import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {fetchmyProfileDataStarted,fetchmyProfileDataSuccess,fetchloadingDataFail} from './MyProfileReducer';

export function* myProfileDetails(action) {

  const payload = action.payload;
  fetchmyProfileDataStarted({});
  const response = yield call(
    apiClient.get,
   `${API_URL.MY_PROFILE_DETAILS}`,
  );
 
  console.log('response====>>',response.data.data)
  if (response.ok) {
   yield put(fetchmyProfileDataSuccess(response.data.data));
  }
  else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchloadingDataFail(response.problem);
  }
 
  
}
