import {call, put, select} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {
  fetchShortlistedDataSuccess,
  fetchShortlistedUserDataFail,
  fetchShortlistedUserDataStarted,
  shortListSuccess,
} from './ShortListReducer';
import {PAGE_SIZE} from '../../../utils/constants/appConstants';

export function* shortListProfile(action) {
  const payload = action.payload;
  const {ok, problem, data} = yield call(
    apiClient.post,
    API_URL.SHORTED_USER,
    payload,
  );

  if (ok) {
    yield put(shortListSuccess(data));
  }
}

export function* shortlistedUsers(action) {
  const payload = action.payload;
  yield put(fetchShortlistedUserDataStarted({}));

  const {ok, data} = yield call(
    apiClient.post,
    API_URL.SHORT_LISTEDD_USERS,
    payload,
  );
  let finalProfileList = [];
  if (payload.page > 1) {
    const {shortListedUsersData} = yield select(
      state => state.shortListProfiles,
    );
    finalProfileList = shortListedUsersData.concat(data.data);
  } else {
    finalProfileList = data.data;
  }
  if (ok) {
    yield put(
      fetchShortlistedDataSuccess({
        profile: finalProfileList,
        isPaginationRequired: data.data?.length === PAGE_SIZE,
        pageNumber: payload.page,
      }),
    );
  } else {
    yield put(fetchShortlistedUserDataFail({}));
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
  }
}
