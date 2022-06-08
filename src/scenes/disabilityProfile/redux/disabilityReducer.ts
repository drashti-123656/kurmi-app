import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  disabilityData: [],
  isFetching: false,
  error: '',
  pageIndex: 1,
  isPaginationRequired: true,
};

const disabilitySlice = createSlice({
  name: 'disabilityProfile',
  initialState,
  reducers: {
    
    fetchDisabilityDataStarted(state) {
      state.isFetching = true;
    },
    fetchDisabilityDataSuccess(state, {payload}) {
      state.disabilityData = payload.profile;
      state.isFetching = false;
      state.pageIndex = payload.pageNumber;
      state.isPaginationRequired = payload.isPaginationRequired;
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
