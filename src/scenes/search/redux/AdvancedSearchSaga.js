import {showMessage} from 'react-native-flash-message';
import {call, put, select} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {
  fetchAdvanceSearchStarted,
  fetchAdvanceSearchSuccess,
  fetchAdvanceSearchFail,
} from './AdvanceSearchReducer';
import {PAGE_SIZE} from '../../../utils/constants/appConstants';
export function* advancesearchStatus(action) {
  const payload = action.payload;

  yield put(fetchAdvanceSearchStarted({}));

  const {data, ok} = yield call(
    apiClient.post,
    API_URL.ADVANCE_SEARCH_DATA,
    payload,
  );
  let finalProfileList = [];
  if (payload.page > 1) {
    const {advanceserachData} = yield select(state => state.advanceSerach);
    finalProfileList = advanceserachData.concat(data.data);
  } else {
    finalProfileList = data.data;
  }
  if (ok) {
    yield put(
      fetchAdvanceSearchSuccess({
        profile: finalProfileList,
        isPaginationRequired: data.data?.length === PAGE_SIZE,
        pageNumber: payload.page,
      }),
    );
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    yield put(fetchAdvanceSearchFail({}));
  }
}
