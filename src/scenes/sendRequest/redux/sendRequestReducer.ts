import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  acceptedRequest: [],
  sendfriendRequestData: [],
  receivedfriendRequestData: [],
  isFetching: false,
  error: '',
  pageIndex: 1,
  isPaginationRequired: true,
};

const frienRequestSlice = createSlice({
  name: 'friendRequestProfile',
  initialState,
  reducers: {
    acceptedRequestSuccess(state, action) {
      state.acceptedRequest = action.payload;
    },
    fetchFriendRequestDataStarted(state) {
      state.isFetching = true;
    },
    fetchSendFriendRequestDataSuccess(state, {payload}) {
      state.sendfriendRequestData = payload.profile;
      state.isFetching = false;
      state.pageIndex = payload.pageNumber;
      state.isPaginationRequired = payload.isPaginationRequired;
    },
    fetchReceivedFriendRequestDataSuccess(state, {payload}) {
      state.receivedfriendRequestData = payload.profile;
      state.isFetching = false;
      state.pageIndex = payload.pageNumber;
      state.isPaginationRequired = payload.isPaginationRequired;
    },
    fetchFriendRequestDataFail(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = frienRequestSlice;

export const {
  acceptedRequestSuccess,
  fetchFriendRequestDataStarted,
  fetchSendFriendRequestDataSuccess,
  fetchReceivedFriendRequestDataSuccess,
  fetchFriendRequestDataFail,
} = actions;
export default reducer;
