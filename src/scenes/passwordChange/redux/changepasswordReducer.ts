import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    changepasswordData:{
        currentPassword:'',
        NewPassword:'',
        Retypenewpassword:''
      }
};

const passwordSlice = createSlice({
  name: 'changepassword',
  initialState,
  reducers: {
    changepassword(state, action) {
      state.changepasswordData.currentPassword = action.payload.userOldPassword;
      state.changepasswordData.NewPassword = action.payload.userPassword;
      state.changepasswordData.Retypenewpassword = action.payload.userConfrimPassword;
    
    },
   
  },
});

const {actions, reducer} = passwordSlice;

export const {changepassword} = actions;
export default reducer;
