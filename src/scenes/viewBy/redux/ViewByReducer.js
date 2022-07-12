import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  viewByData: [],
  viewByUsersData: [],
  error: 'something went wrong',
  isfetching: false,
  pageIndex: 1,
  isPaginationRequired: true,
  clear: '',
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
    fetchViewByUserDataFail(state, action) {
      state.isfetching = false;
      state.error = true;
      state.isPaginationRequired = false;
    },
    clearViewByDataAfterLogout(state, action) {
      return initialState;
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
  clearViewByDataAfterLogout,
} = actions;
export default reducer;
