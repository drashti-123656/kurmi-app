import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSubmitting: false,
};

const contactUsSlice = createSlice({
  name: 'ContactUsReducer',
  initialState,
  reducers: {
    isSubmittingStarted(state, action) {
      state.isSubmitting = true;
    },

    isSubmittingSuccess(state, action) {
      state.isSubmitting = false;
    },
    isSubmittingFail(state, action) {
      state.isSubmitting = false;
    },
  },
});

const {actions, reducer} = contactUsSlice;

export const {isSubmittingStarted, isSubmittingSuccess, isSubmittingFail} =
  actions;
export default reducer;
