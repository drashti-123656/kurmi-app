import {call, select, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {PAGE_SIZE} from '../../../utils/constants/appConstants';
import {
  fetchFriendRequestDataFail,
  fetchFriendRequestDataStarted,
  fetchSendFriendRequestDataSuccess,
  fetchReceivedFriendRequestDataSuccess,
  acceptedRequestSuccess,
} from './sendRequestReducer';
export function* sendFriendRequest({id}) {
  const {ok, data} = yield call(
    apiClient.post,
    `${API_URL.SEND_FRIEND_REQUEST}/${id}`,
  );
  if (ok) {
    showMessage({
      message: 'Friend request send  successfully......',
      type: 'success',
    });
  }
}

export function* sendFriendRequestList(action) {
  const payload = action.payload;
  yield put(fetchFriendRequestDataStarted({}));

  const {ok, data} = yield call(
    apiClient.post,
    API_URL.SEND_FRIEND_REQUEST_LIST,
    payload,
  );
  let finalProfileList = [];
  if (payload.page > 1) {
    const {sendfriendRequestData} = yield select(
      state => state.friendRequestProfile,
    );
    finalProfileList = sendfriendRequestData.concat(data.data);
  } else {
    finalProfileList = data.data;
  }

  if (ok) {
    yield put(
      fetchSendFriendRequestDataSuccess({
        profile: finalProfileList,
        isPaginationRequired: data.data?.length === PAGE_SIZE,
        pageNumber: payload.page,
      }),
    );
  } else {
    yield put(fetchFriendRequestDataFail({}));
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
  }
}

export function* receivedFriendRequestList(action) {
  const payload = action.payload;
  yield put(fetchFriendRequestDataStarted({}));

  const {ok, data} = yield call(
    apiClient.post,
    API_URL.RECEIVED_FRIEND_REQUEST_LIST,
    payload,
  );
  let finalProfileList = [];
  if (payload.page > 1) {
    const {receivedfriendRequestData} = yield select(
      state => state.friendRequestProfile,
    );
    finalProfileList = receivedfriendRequestData.concat(data.data);
  } else {
    finalProfileList = data.data;
  }

  if (ok) {
    yield put(
      fetchReceivedFriendRequestDataSuccess({
        profile: finalProfileList,
        isPaginationRequired: data.data?.length === PAGE_SIZE,
        pageNumber: payload.page,
      }),
    );
  } else {
    yield put(fetchFriendRequestDataFail({}));
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
  }
}

export function* acceptDeniedFriendRequest(action) {
  const payload = action.payload;
  const {ok, data} = yield call(
    apiClient.post,
    API_URL.ACCEPT_DENIED_PROFILE,
    payload,
  );

  if (ok) {
    yield put(acceptedRequestSuccess(data));
  }
}
