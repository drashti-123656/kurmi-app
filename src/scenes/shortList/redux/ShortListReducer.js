import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  shortListData: [],
  shortListedUsersData : [],
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

    fetchShortlistedUserDataStarted(state) {
      state.isfatching = true;
    },
    fetchShortlistedDataSuccess(state,action) {
      state.shortListedUsersData = action.payload;
      state.isfatching = false;
    },
    fetchShortlistedUserDataFail(state){
      state.isfatching = false;
      state.error = true;
    },
    },
   
  },
);

const {actions, reducer} = searchProfileSlice;

export const {shortListSuccess, shortListFail,fetchShortlistedUserDataStarted,fetchShortlistedDataSuccess,fetchShortlistedUserDataFail} = actions;
export default reducer;
