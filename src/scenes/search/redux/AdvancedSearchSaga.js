import {showMessage} from 'react-native-flash-message';
import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {
    fetchAdvanceSearchStarted,
    fetchAdvanceSearchSuccess,
    fetchAdvanceSearchFail,
} from './AdvanceSearchReducer';

export function* advancesearchStatus(action) {
  const payload = action.payload;

  yield put(fetchAdvanceSearchStarted({}));

  const {data, ok} = yield call(
    apiClient.post,
    API_URL.ADVANCE_SEARCH_DATA,
    payload,
  );
  if (ok) {
    
    yield put(fetchAdvanceSearchSuccess(data.data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    yield put(fetchAdvanceSearchFail({}));

  }

}
