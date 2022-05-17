import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  widowerData: [],
  isFetching: false,
  error: '',
};

const widowerSlice = createSlice({
  name: 'widowerProfile',
  initialState,
  reducers: {
    fetchWidowerDataStarted(state) {
      state.isFetching = true;
    },
    fetchWidowerDataSuccess(state, action) {
      state.widowerData = action.payload;
      state.isFetching = false;
    },
    fetchWidowerDataFail(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = widowerSlice;

export const {fetchWidowerDataStarted, fetchWidowerDataSuccess, fetchWidowerDataFail} = actions;
export default reducer;