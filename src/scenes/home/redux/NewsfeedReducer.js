import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  newsFeedData: [],
  error: '',
  isFetching: false,
  page: 1,
  isPaginationRequired: true,
};

const searchProfileSlice = createSlice({
  name: 'NewsfeedReducer',
  initialState,
  reducers: {
    fetchNewsFeedStarted(state, action) {
      state.isFetching = true;
    },

    fetchNewsFeedSuccess(state, action) {
      state.newsFeedData = action.payload;
      state.isFetching = false;
      state.page = action.payload.pageNumber;
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
