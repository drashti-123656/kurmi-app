import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {
  updateProfile,
  updatedProfileSuccess,
  updatedProfileFail,
} from '../redux/editProfileReducer';

export function* editProfile(action) {
  const payload = action.payload;
  console.log('rd====>', payload);
  yield put(updateProfile({}));
  const {data, ok, problem} = yield call(
    apiClient.post,
    API_URL.EDIT_PROFILE,
    payload,
  );
  console.log('dataaaaaaaaaaa  ====>', data);
  if (ok) {
    showMessage({
      message: 'profile updated Successfully',
      type: 'success',
    });
    yield put(updatedProfileSuccess(data.data));
  } else {
    yield put(updatedProfileFail(problem));
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
  }
}
