import registrationReducer from './../scenes/auth/registration/redux/registrationReducer';
import authReducer from './../scenes/auth/redux/authReducer';
import {combineReducers} from '@reduxjs/toolkit';
import widowedReducer from '../scenes/widowedProfile/redux/widowedReducer'
import NewsfeedReducer from '../scenes/home/redux/NewsfeedReducer';
import loginReducer from '../scenes/auth/login/loginReducer';
import divorcedReducer from '../scenes/divorcedProfile/redux/divorcedReducer';
import changePasswordReducer from '../scenes/passwordChange/redux/changepasswordReducer';
import OthersDetailReducer from '../scenes/othersProfile/redux/OthersDetailReducer';
import disabilityReducer from '../scenes/disabilityProfile/redux/disabilityReducer'
import MyProfileReducer from '../scenes/myProfile/redux/MyProfileReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,

  newsfeed: NewsfeedReducer,

  changepassword: changePasswordReducer,

  login: loginReducer,

  othersDetail: OthersDetailReducer,

  divorcedProfile: divorcedReducer,

  widowedProfile: widowedReducer,
  disabilityProfile: disabilityReducer,
  myProfileDetail: MyProfileReducer
});

export default rootReducer;
