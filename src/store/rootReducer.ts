import registrationReducer from './../scenes/auth/registration/redux/registrationReducer';
import authReducer from './../scenes/auth/redux/authReducer';
import {combineReducers} from '@reduxjs/toolkit';

import NewsfeedReducer from '../scenes/home/redux/NewsfeedReducer';
import loginReducer from '../scenes/auth/login/loginReducer';
import changePasswordReducer from '../scenes/passwordChange/redux/changepasswordReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,

  
  newsfeed: NewsfeedReducer,

 
  changepassword: changePasswordReducer,
});

export default rootReducer;
