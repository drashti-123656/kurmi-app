import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  newsFeedData: [],
  error: '',
  isFetching: false,
  pageIndex: 1,
  isPaginationRequired: true,
};

const searchProfileSlice = createSlice({
  name: 'NewsfeedReducer',
  initialState,
  reducers: {
    fetchNewsFeedStarted(state, action) {
      state.isFetching = true;
    },

    fetchNewsFeedSuccess(state, {payload}) {
      state.newsFeedData = payload.profile;
      state.isFetching = false;
      state.pageIndex = payload.pageNumber;
      state.isPaginationRequired = payload.isPaginationRequired;
    },
    fetchNewsFeedFail(state, action) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = searchProfileSlice;

export const {
  fetchNewsFeedStarted,
  fetchNewsFeedSuccess,
  fetchNewsFeedFail,
  fetchothersProfileData,
} = actions;
export default reducer;
