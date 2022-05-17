import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isFetching: false,
  authData: {
    isAuthenticated: false,
    userData: {},
    token: '',
    error: null,
    loading: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchLoginDataStarted(state) {
      state.isFetching = true;
    },
    fetchLoginDataSuccess(state, action) {
      state.authData.isAuthenticated = true;
      state.authData.userData = {};
      state.authData.token = action.payload;
      state.authData.error = null;
      state.isFetching = false;
    },
    fetchLoginDataFail(state) {
      state.isFetching = false;
      state.authData.error = null;
    },
    logout(state) {
      state.authData.isAuthenticated = false;
      state.authData.userData = {};
      state.authData.token = '';
      state.authData.error = null;
      state.authData.loading = false;
    },
    authError(state, action) {
      state.authData.error = action.payload;
      state.authData.loading = false;
    },
    authLoading(state, action) {
      state.authData.loading = action.payload;
    },
  },
});

const {actions, reducer} = authSlice;

export const {fetchLoginDataStarted, fetchLoginDataSuccess, fetchLoginDataFail, logout, authError, authLoading} = actions;
export default reducer;
