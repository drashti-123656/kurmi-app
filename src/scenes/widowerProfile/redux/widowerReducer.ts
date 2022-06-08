import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  widowerData: [],
  isFetching: false,
  error: '',
  pageIndex: 1,
  isPaginationRequired: true,
};

const widowerSlice = createSlice({
  name: 'widowerProfile',
  initialState,
  reducers: {
    fetchWidowerDataStarted(state) {
      state.isFetching = true;
    },
    fetchWidowerDataSuccess(state, {payload}) {
      state.widowerData = payload.profile;
      state.isFetching = false;
      state.pageIndex = payload.pageNumber;
      state.isPaginationRequired = payload.isPaginationRequired;
    },
    fetchWidowerDataFail(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = widowerSlice;

export const {
  fetchWidowerDataStarted,
  fetchWidowerDataSuccess,
  fetchWidowerDataFail,
} = actions;
export default reducer;
