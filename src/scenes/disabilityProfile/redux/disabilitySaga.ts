import {showMessage} from 'react-native-flash-message';
import {call, put, select} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {PAGE_SIZE} from '../../../utils/constants/appConstants';
import {
  fetchDisabilityDataFail,
  fetchDisabilityDataStarted,
  fetchDisabilityDataSuccess,
} from './disabilityReducer';

export function* disabilityStatus(action) {
  const payload = action.payload;

  yield put(fetchDisabilityDataStarted({}));

  const {data, ok} = yield call(
    apiClient.post,
    API_URL.DISABILITY_DATA,
    payload,
  );

  let finalProfileList = [];
  if (payload.page > 1) {
    const {disabilityData} = yield select(state => state.disabilityProfile);
    finalProfileList = disabilityData.concat(data.data);
  } else {
    finalProfileList = data.data;
  }

  if (ok) {
    yield put(
      fetchDisabilityDataSuccess({
        profile: finalProfileList,
        isPaginationRequired: data.data.length === PAGE_SIZE,
        pageNumber: payload.page,
      }),
    );
  } else {
    yield put(fetchDisabilityDataFail({}))
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
  }
}
