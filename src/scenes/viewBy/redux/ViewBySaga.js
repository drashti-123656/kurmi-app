import {call, put, select} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {PAGE_SIZE} from '../../../utils/constants/appConstants';
import {
  fetchViewByDataSuccess,
  fetchViewByUserDataFail,
  fetchViewByUserDataStarted,
  viewBySuccess,
} from './ViewByReducer';

export function* viewByProfile(action) {
  const payload = action.payload;
  const {ok, problem, data} = yield call(
    apiClient.post,
    API_URL.VIEW_BY_ID_PROFILE,
    payload,
  );
  console.log('view priofile====>', data);

  if (ok) {
    yield put(viewBySuccess(data));
  }
}

export function* viewByUsers(action) {
  const payload = action.payload;
  fetchViewByUserDataStarted({});
  const {ok, problem, data} = yield call(
    apiClient.post,
    API_URL.VIEW_BY_USERS,
    payload,
  );
  let finalProfileList = [];
  if (payload.page > 1) {
    const {viewByUsersData} = yield select(state => state.viewByProfiles);
    finalProfileList = viewByUsersData.concat(data.data);
  } else {
    finalProfileList = data.data;
  }
  console.log('view by userssssss==>>', data);

  if (ok) {
    yield put(
      fetchViewByDataSuccess({
        profile: finalProfileList,
        pageNumber: payload.page,
      }),
    );
  } else {
    showMessage({
      message: 'Login Your Account!',
      type: 'danger',
    });
    fetchViewByUserDataFail(problem);
  }
}
