import {call} from 'redux-saga/effects';
import apiClient from './../../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../../services/webConstants';
import {registrationsFail, registrationSuccess} from './registrationReducer';

export function* registerUser(action) {
  const payload = action.payload;
  const response = yield call(apiClient.post, API_URL.REGISTER_USER, payload);
  if (response.ok) {
    showMessage({
        message: 'successfully registered',
        type: "success", 
      });
    registrationSuccess({});
  } else {
    showMessage({
        message: 'Ops, something went wrong',
        type: "danger", 
      });
    registrationsFail(response.problem);
  }
}
