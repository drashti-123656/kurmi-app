import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  advanceserachData: [],
  isFetching: false,
  error: '',
  pageIndex: 1,
  isPaginationRequired: true,
};

const advanceSearchSlice = createSlice({
  name: 'advancesearch',
  initialState,
  reducers: {
    fetchAdvanceSearchStarted(state) {
      state.isFetching = true;
    },
    fetchAdvanceSearchSuccess(state, {payload}) {
      state.advanceserachData = payload.profile;
      state.isFetching = false;
      state.pageIndex = payload.pageNumber;
      state.isPaginationRequired = payload.isPaginationRequired;
    },
    fetchAdvanceSearchFail(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = advanceSearchSlice;

export const {
  fetchAdvanceSearchStarted,
  fetchAdvanceSearchSuccess,
  fetchAdvanceSearchFail,
} = actions;
export default reducer;
