import {call, put, select} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {
  fetchNewsFeedFail,
  fetchNewsFeedStarted,
  fetchNewsFeedSuccess,
} from './NewsfeedReducer';
import {PAGE_SIZE} from '../../../utils/constants/appConstants';

export function* searchProfile(action) {
  const payload = action.payload;

  yield put(fetchNewsFeedStarted({}));
  const {data, ok} = yield call(
    apiClient.post,
    API_URL.SEARCH_PROFILE,
    payload,
  );
  let finalProfileList = [];
  if (payload.page > 1) {
    const {newsFeedData} = yield select(state => state.newsfeed);
    finalProfileList = newsFeedData.concat(data.data);
  } else {
    finalProfileList = data.data;
  }

  if (ok) {
    yield put(
      fetchNewsFeedSuccess({
        profile: finalProfileList,
        isPaginationRequired: data.data.length === PAGE_SIZE,
        pageNumber: payload.page,
      }),
    );
  } else {
    yield put(fetchNewsFeedFail({}));
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
  }
}
