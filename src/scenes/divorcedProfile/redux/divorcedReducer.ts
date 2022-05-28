import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  divorcedData: [],
  isFetching: false,
  error: '',
};

const divorcedSlice = createSlice({
  name: 'divorcedProfile',
  initialState,
  reducers: {
    fetchDivorcedDataStarted(state) {
      state.isFetching = true;
    },
    fetchDivorcedDataSuccess(state, action) {
      state.divorcedData = action.payload;
      state.isFetching = false;
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
