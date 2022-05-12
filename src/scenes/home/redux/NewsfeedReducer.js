import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  newsFeedData: [],
  error: '',
  isfatching: false,

  othersProfileData : [],
};

const searchProfileSlice = createSlice({
  name: 'NewsfeedReducer',
  initialState,
  reducers: {
    fetchNewsFeed(state, action) {
      state.newsFeedData.isfatching = true;
    },

    newsFeedSuccess(state, action) {
      state.newsFeedData = action.payload;
    },
    newsFeedFail(state, action) {
      state.newsFeedData.isfatching = false;
      state.newsFeedData.error = action.payload;
    },
    fetchothersProfileData(state,action) {
      
      state.othersProfileData = action.payload;

    }
  },
});

const {actions, reducer} = searchProfileSlice;

export const {fetchNewsFeed, newsFeedSuccess, newsFeedFail,fetchothersProfileData} = actions;
export default reducer;
