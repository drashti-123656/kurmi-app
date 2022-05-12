import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  shortListData: [],
  error: '',
  isfatching: false,

 
};

const searchProfileSlice = createSlice({
  name: 'ShortListReducer',
  initialState,
  reducers: {
    // fetchNewsFeed(state, action) {
    //   state.newsFeedData.isfatching = true;
    // },

    shortListSuccess(state, action) {
      state.shortListData = action.payload;
    },
    shortListFail(state, action) {
      state.shortListData.isfatching = false;
      state.shortListData.error = action.payload;
    },
   
  },
});

const {actions, reducer} = searchProfileSlice;

export const {shortListSuccess, shortListFail} = actions;
export default reducer;
