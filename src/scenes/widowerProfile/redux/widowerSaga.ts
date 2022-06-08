import {showMessage} from 'react-native-flash-message';
import {call, put, select} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {PAGE_SIZE} from '../../../utils/constants/appConstants';
import {
  fetchWidowerDataFail,
  fetchWidowerDataStarted,
  fetchWidowerDataSuccess,
} from './widowerReducer';

export function* widowerStatus(action) {
  const payload = action.payload;

  yield put(fetchWidowerDataStarted({}));

  const {data, ok} = yield call(apiClient.post, API_URL.WIDOWER_DATA, payload);

  let finalProfileList = [];
  if (payload.page > 1) {
    const {widowerData} = yield select(state => state.widowerProfile);
    finalProfileList = widowerData.concat(data.data);
  } else {
    finalProfileList = data.data;
  }

  if (ok) {
    yield put(
      fetchWidowerDataSuccess({
        profile: finalProfileList,
        isPaginationRequired: data.data.length === PAGE_SIZE,
        pageNumber: payload.page,
      }),
    );
  } else {
    yield put(fetchWidowerDataFail({}));
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
  }
}
