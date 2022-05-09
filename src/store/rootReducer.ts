import registrationReducer from './../scenes/auth/registration/redux/registrationReducer';
import authReducer from './../scenes/auth/redux/authReducer';
import {combineReducers} from '@reduxjs/toolkit';
import loginReducer from '../scenes/auth/login/loginReducer';
import changepasswordReducer from '../scenes/passwordChange/redux/changepasswordReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  login: loginReducer,
  changepassword:changepasswordReducer
  
});

export default rootReducer;
