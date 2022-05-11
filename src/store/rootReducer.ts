import registrationReducer from './../scenes/auth/registration/redux/registrationReducer';
import authReducer from './../scenes/auth/redux/authReducer';
import {combineReducers} from '@reduxjs/toolkit';
import loginReducer from '../scenes/auth/login/loginReducer';
import divorcedReducer from '../scenes/divorcedProfile/redux/divorcedReducer'
import changePasswordReducer from '../scenes/passwordChange/redux/changepasswordReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  login: loginReducer,
  changepassword: changePasswordReducer,
  divorcedProfile: divorcedReducer,
});

export default rootReducer;
