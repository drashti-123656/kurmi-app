import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {
  fetchNewsFeedFail,
  fetchNewsFeedStarted,
  fetchNewsFeedSuccess,
  newsFeedSuccess,
} from './NewsfeedReducer';

export function* searchProfile(action) {
  const payload = action.payload;

  fetchNewsFeedStarted({});

  const response = yield call(apiClient.post, API_URL.SEARCH_PROFILE, payload);

  if (response.ok) {
    yield put(fetchNewsFeedSuccess(response.data.data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchNewsFeedFail(response.problem);
  }
}
