import {showMessage} from 'react-native-flash-message';
import {call, put, select} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {PAGE_SIZE} from '../../../utils/constants/appConstants';
import {
  viewBySuccess,
  fetchViewByUserDataStarted,
  fetchViewByDataSuccess,
  fetchViewByUserDataFail,
} from './ViewByReducer';

export function* addMeVisitor(action) {
  const payload = action.payload;

  const {ok, data} = yield call(
    apiClient.post,
    API_URL.ADD_ME_VISITOR_PROFILE,
    payload,
  );

  if (ok) {
    yield put(viewBySuccess(data));
  }
}
export function* viewByList(action) {
  const payload = action.payload;

  yield put(fetchViewByUserDataStarted({}));

  const {data, ok} = yield call(apiClient.post, API_URL.VIEW_BY_USERS, payload);

  let finalProfileList = [];
  if (payload.page > 1) {
    const {viewByUsersData} = yield select(state => state.viewByProfiles);
    finalProfileList = viewByUsersData.concat(data.data);
  } else {
    finalProfileList = data;
  }
  if (ok) {
    yield put(
      fetchViewByDataSuccess({
        profile: finalProfileList,
        isPaginationRequired: data.data?.length === PAGE_SIZE,
        pageNumber: payload.page,
      }),
    );
  } else {
    yield put(fetchViewByUserDataFail({}));
  }
}
