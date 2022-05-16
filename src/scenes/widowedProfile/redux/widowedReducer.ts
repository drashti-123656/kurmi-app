import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  widowedData: [],
  isFetching: false,
  error: '',
};

const widowedSlice = createSlice({
  name: 'widowedProfile',
  initialState,
  reducers: {
    fetchWidowedDataStarted(state) {
      state.isFetching = true;
    },
    fetchWidowedDataSuccess(state, action) {
      state.widowedData = action.payload;
      state.isFetching = false;
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
