import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email : '',
    isLoading : false,
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
  
    ForgotPasswordStarted(state, action) {
        state.isLoading = true;
       
      
      },
      ForgotPasswordSuccess(state, action) {
        state.isLoading = false;
        state.email = action.payload;
       
      
      },
      ForgotPasswordFailed(state, action) {
        state.isLoading = false;
       
      
      },

   
  },
});

const {actions, reducer} = forgotPasswordSlice;

export const {ForgotPasswordStarted,ForgotPasswordSuccess,ForgotPasswordFailed} = actions;
export default reducer;
