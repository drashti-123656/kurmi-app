import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  divorcedData: [],
  isFetching: false,
  error: '',
  pageIndex: 1,
  isPaginationRequired: true,
};

const divorcedSlice = createSlice({
  name: 'divorcedProfile',
  initialState,
  reducers: {
    fetchDivorcedDataStarted(state) {
      state.isFetching = true;
    },
    fetchDivorcedDataSuccess(state, {payload}) {
      state.divorcedData = payload.profile;
      state.isFetching = false;
      state.pageIndex = payload.pageNumber;
      state.isPaginationRequired = payload.isPaginationRequired;
    },
    fetchDivorcedDataFail(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = divorcedSlice;

export const {
  fetchDivorcedDataStarted,
  fetchDivorcedDataSuccess,
  fetchDivorcedDataFail,
} = actions;
export default reducer;
