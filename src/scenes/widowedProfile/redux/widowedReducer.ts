import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  widowedData: [],
  isFetching: false,
  error: '',
  pageIndex: 1,
  isPaginationRequired: true,
};

const widowedSlice = createSlice({
  name: 'widowedProfile',
  initialState,
  reducers: {
    fetchWidowedDataStarted(state) {
      state.isFetching = true;
    },
    fetchWidowedDataSuccess(state, {payload}) {
      state.widowedData = payload.profile;
      state.isFetching = false;
      state.pageIndex = payload.pageNumber;
      state.isPaginationRequired = payload.isPaginationRequired;
    },
    fetchWidowedDataFail(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = widowedSlice;

export const {
  fetchWidowedDataStarted,
  fetchWidowedDataSuccess,
  fetchWidowedDataFail,
} = actions;
export default reducer;
