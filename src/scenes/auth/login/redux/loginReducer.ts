import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loginData:{
        login:'',
        password:''
      }
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.loginData.login = action.payload.userLoginId;
      state.loginData.password = action.payload.userPassword;
    
    },
   
  },
});

const {actions, reducer} = loginSlice;

export const {login} = actions;
export default reducer;
