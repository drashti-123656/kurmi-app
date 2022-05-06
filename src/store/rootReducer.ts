import registrationReducer from './../scenes/auth/registration/redux/registrationReducer';
import authReducer from './../scenes/auth/redux/authReducer';
import {combineReducers} from '@reduxjs/toolkit';
import loginReducer from '../scenes/auth/login/redux/loginReducer';
import  NewsfeedReducer  from '../scenes/home/redux/NewsfeedReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  login: loginReducer,
  newsfeed : NewsfeedReducer,


});

export default rootReducer;
