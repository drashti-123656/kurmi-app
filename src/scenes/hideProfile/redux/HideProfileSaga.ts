import {showMessage} from 'react-native-flash-message';
import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';

import {toggleError, toggleOff, toggleOn} from './HideProfileReducer';
export function* hideprofileStatus(action) {
  const payload = action.payload;
console.log('payyyyyy===>',payload)
  toggleOn({});

  const {data,ok,problem} = yield call(
    apiClient.post,
    API_URL.TOGGLE_SWITCH_ACTIVE,
    payload,
  );
  console.log('respossss====>', data);
  if (ok) {
    yield put(toggleOff(data));
  } else {
    toggleError(problem);
  }
}
