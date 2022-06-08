import {showMessage} from 'react-native-flash-message';
import {call, put, select} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import { PAGE_SIZE } from '../../../utils/constants/appConstants';
import {
  fetchWidowedDataFail,
  fetchWidowedDataStarted,
  fetchWidowedDataSuccess,
} from './widowedReducer';

export function* widowedStatus(action) {
  const payload = action.payload;

  yield put(fetchWidowedDataStarted({}));

  const {data, ok} = yield call(
    apiClient.post,
    API_URL.WIDOWED_DATA,
    payload,
  );

  let finalProfileList = [];
  if (payload.page > 1) {
    const {widowedData} = yield select(state => state.widowedProfile);
    finalProfileList = widowedData.concat(data.data);
  } else {
    finalProfileList = data.data;
  }

  if (ok) {
    yield put(fetchWidowedDataSuccess({profile: finalProfileList,
      isPaginationRequired: data.data.length === PAGE_SIZE,
      pageNumber: payload.page,}));
  } else {
    yield put(fetchWidowedDataFail({}))
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
  }
}
