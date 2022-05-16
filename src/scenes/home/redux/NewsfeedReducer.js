import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  newsFeedData: [],
  error: '',
  isFetching: false,
  othersProfileData: [],
};

const searchProfileSlice = createSlice({
  name: 'NewsfeedReducer',
  initialState,
  reducers: {
    fetchNewsFeedStarted(state, action) {
      state.newsFeedData.isFetching = true;
    },

    fetchNewsFeedSuccess(state, action) {
      state.newsFeedData = action.payload;
      state.isFetching = false;
    },
    fetchNewsFeedFail(state, action) {
      state.newsFeedData.isFetching = false;
      state.error = true;
    },
    fetchothersProfileData(state, action) {
      state.othersProfileData = action.payload;
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
