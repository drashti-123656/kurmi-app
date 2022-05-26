import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import { fetchViewByDataSuccess, fetchViewByUserDataFail, fetchViewByUserDataStarted, viewBySuccess } from './ViewByReducer';



export function* viewByProfile(action) {
  const payload = action.payload;
  const {ok, problem, data} = yield call(
    apiClient.post,
    API_URL.VIEW_BY_ID_PROFILE,
    payload,
  );
  console.log('view priofile====>',data)

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
  console.log('view by userssssss==>>',data)

  if (ok) {
    yield put(fetchViewByDataSuccess(data));
  } else {
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
    fetchViewByUserDataFail(problem);
  }
}
