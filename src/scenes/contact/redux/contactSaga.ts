import {call, put} from 'redux-saga/effects';
import apiClient from './../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {navigate} from '../../../navigation/RootNavigation';
import {showMessage} from 'react-native-flash-message';
import {
  isSubmittingFail,
  isSubmittingStarted,
  isSubmittingSuccess,
} from './contactReducer';

export function* contactUser(action) {
  const payload = action.payload;
  yield put(isSubmittingStarted({}));
  const {ok} = yield call(apiClient.post, API_URL.CONTACT_USER, payload);

  if (ok) {
    isSubmittingSuccess;
    yield put(isSubmittingSuccess({}));
    showMessage({
      message: 'Successfull',
      description: ' Your Contact Details are saved',
      type: 'success',
    });

    navigate('DrawerNavigation');
  } else {
    yield put(isSubmittingFail({}));
  }
}
