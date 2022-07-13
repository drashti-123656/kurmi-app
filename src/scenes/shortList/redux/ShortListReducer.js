import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  shortListData: [],
  shortListedUsersData: [],
  error: '',
  isFetching: false,
  pageIndex: 1,
  isPaginationRequired: true,
};

const searchProfileSlice = createSlice({
  name: 'ShortListReducer',
  initialState,
  reducers: {
    shortListSuccess(state, action) {
      state.shortListData = action.payload;
    },
    shortListFail(state, action) {
      state.shortListData.isfatching = false;
      state.shortListData.error = action.payload;
    },

    fetchShortlistedUserDataStarted(state, action) {
      state.isFetching = true;
    },
    fetchShortlistedDataSuccess(state, {payload}) {
      state.shortListedUsersData = payload.profile;
      state.isFetching = false;
      state.pageIndex = payload.pageNumber;
      state.isPaginationRequired = payload.isPaginationRequired;
    },
    fetchShortlistedUserDataFail(state, action) {
      state.isFetching = false;
      state.error = true;
    },
    clearShortlistedDataAfterLogout(state, action) {
      return initialState;
    },
  },
});

const {actions, reducer} = searchProfileSlice;

export const {
  shortListSuccess,
  shortListFail,
  fetchShortlistedUserDataStarted,
  fetchShortlistedDataSuccess,
  fetchShortlistedUserDataFail,
  clearShortlistedDataAfterLogout,
} = actions;
export default reducer;
