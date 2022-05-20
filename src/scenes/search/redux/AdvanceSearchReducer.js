import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  advanceserachData: [],
  isFetching: false,
  error: '',
};

const advanceSearchSlice = createSlice({
  name: 'advancesearch',
  initialState,
  reducers: {
    fetchAdvanceSearchStarted(state) {
      state.isFetching = true;
    },
    fetchAdvanceSearchSuccess(state, action) {
      state.advanceserachData = action.payload;
      state.isFetching = false;
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
