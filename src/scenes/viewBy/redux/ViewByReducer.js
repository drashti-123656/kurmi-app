import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  viewByProfileData: [],
  viewByUsersData: [],
  error: '',
  isfetching: false,
  page: 1,
  isPaginationRequired: true,
};

const viewProfileSlice = createSlice({
  name: 'ViewByReducer',
  initialState,
  reducers: {
    viewBySuccess(state, action) {
      state.viewByProfileData = action.payload;
    },
    viewByFail(state, action) {
      state.viewByProfileData.isfetching = false;
      state.viewByProfileData.error = action.payload;
    },

    fetchViewByUserDataStarted(state) {
      state.isfetching = true;
    },
    fetchViewByDataSuccess(state, action) {
      state.viewByUsersData = action.payload.profile;
      state.isfetching = false;
      state.page = action.payload.pageNumber;
    },
    fetchViewByUserDataFail(state) {
      state.isfetching = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = viewProfileSlice;

export const {
  viewBySuccess,
  viewByFail,
  fetchViewByUserDataStarted,
  fetchViewByDataSuccess,
  fetchViewByUserDataFail,
} = actions;
export default reducer;
