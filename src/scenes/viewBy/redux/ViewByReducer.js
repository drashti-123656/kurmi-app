import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  viewByData: [],
  viewByUsersData: [],
  error: '',
  isfetching: false,
  pageIndex: 1,
  isPaginationRequired: true,
};

const viewProfileSlice = createSlice({
  name: 'ViewByReducer',
  initialState,
  reducers: {
    viewBySuccess(state, action) {
      state.viewByData = action.payload;
    },
    viewByFail(state, action) {
      state.viewByData.isfetching = false;
      state.viewByData.error = action.payload;
    },
    fetchViewByUserDataStarted(state) {
      state.isfetching = true;
    },
    fetchViewByDataSuccess(state, {payload}) {
      state.viewByUsersData = payload.profile;
      state.isfetching = false;
      state.pageIndex = payload.pageNumber;
      state.isPaginationRequired = payload.isPaginationRequired;
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
