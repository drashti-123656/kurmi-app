import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  disabilityData: [],
  isFetching: false,
  error: '',
};

const disabilitySlice = createSlice({
  name: 'disabilityProfile',
  initialState,
  reducers: {
    fetchDisabilityDataStarted(state) {
      state.isFetching = true;
    },
    fetchDisabilityDataSuccess(state, action) {
      state.disabilityData = action.payload;
      state.isFetching = false;
    },
    fetchDisabilityDataFail(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = disabilitySlice;

export const {
  fetchDisabilityDataStarted,
  fetchDisabilityDataSuccess,
  fetchDisabilityDataFail,
} = actions;
export default reducer;
