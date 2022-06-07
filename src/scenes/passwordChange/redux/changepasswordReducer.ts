import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  changepasswordData: {
    currentPassword: '',
    NewPassword: '',
    Retypenewpassword: '',
  },
};

const passwordSlice = createSlice({
  name: 'changePassword',
  initialState,
  reducers: {
    isChangePasswordStarted(state, action) {
      state.isLoading = true;
    },
    isChangePasswordSuccess(state, action) {
      state.changepasswordData.currentPassword = action.payload.userOldPassword;
      state.changepasswordData.NewPassword = action.payload.userPassword;
      state.changepasswordData.Retypenewpassword =
        action.payload.userConfrimPassword;
      state.isLoading = false;
      state.error = null;
    },
    isChangePasswordFail(state, action) {
      state.isLoading = false;
      state.error = null;
    },
  },
});

const {actions, reducer} = passwordSlice;

export const {isChangePasswordStarted, isChangePasswordSuccess, isChangePasswordFail} =
  actions;
export default reducer;
