import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import { shortListSuccess } from './ShortListReducer';



export function* shortListProfile(action) {
  const payload = action.payload;
  const response = yield call(
    apiClient.post,
    API_URL.SHORT_LIST_PROFILES,
    payload,
  );
  console.log('shortlist',response.data.data)

  if (response.ok) {
    yield put(shortListSuccess(response.data.data));
  }
}
