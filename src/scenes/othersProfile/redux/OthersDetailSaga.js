import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {fetchothersProfileData} from './OthersDetailReducer';

export function* otherProfileDetails(action) {
  const payload = action.payload;
  const response = yield call(
    apiClient.get,
   `${API_URL.OTHER_PROFILE_DETAILS}/${payload}`,
  );
 
  console.log('response====>>',response.data.data)
  if (response.ok) {
   yield put(fetchothersProfileData(response.data.data));
  }
}
