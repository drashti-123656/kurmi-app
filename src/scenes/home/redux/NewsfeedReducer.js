import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  newsFeedData: [],
  error: '',
  isfatching: false,
};

const searchProfileSlice = createSlice({
  name: 'NewsfeedReducer',
  initialState,
  reducers: {
    fetchNewsFeed(state,action) {
      state.newsFeedData.isfatching = true;
    },

    newsFeedSuccess(state, action) {
      
      state.newsFeedData = action.payload;
    },
    newsFeedFail(state, action) {
      state.newsFeedData.isfatching = false;
      state.newsFeedData.error = action.payload;
    },
  },
});

const {actions, reducer} = searchProfileSlice;

export const {
  fetchNewsFeed,
  newsFeedSuccess,
  newsFeedFail} = actions;
export default reducer;
