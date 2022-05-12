import registrationReducer from './../scenes/auth/registration/redux/registrationReducer';
import authReducer from './../scenes/auth/redux/authReducer';
import {combineReducers} from '@reduxjs/toolkit';

import NewsfeedReducer from '../scenes/home/redux/NewsfeedReducer';
import loginReducer from '../scenes/auth/login/loginReducer';
import divorcedReducer from '../scenes/divorcedProfile/redux/divorcedReducer'
import changePasswordReducer from '../scenes/passwordChange/redux/changepasswordReducer';
import OthersDetailReducer from '../scenes/othersProfile/redux/OthersDetailReducer';
import ShortListReducer from '../scenes/shortList/redux/ShortListReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  login: loginReducer,
  changepassword: changePasswordReducer,
  othersDetail: OthersDetailReducer,
  shortListProfiles: ShortListReducer,
  divorcedProfile: divorcedReducer,
  newsfeed: NewsfeedReducer,
 
});

export default rootReducer;
