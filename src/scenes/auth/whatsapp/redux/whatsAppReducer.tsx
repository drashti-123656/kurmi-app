import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSaving: false,
  isFirstlaunch: true,
};

const authSlice = createSlice({
  name: 'whatsApp',
  initialState,
  reducers: {
    savingStarted(state, action) {
      state.isSaving = true;
    },
    savingSuccess(state, action) {
      state.isSaving = false;
      state.isFirstlaunch = false;
    },
  },
});

const {actions, reducer} = authSlice;

export const {savingStarted, savingSuccess} = actions;
export default reducer;
