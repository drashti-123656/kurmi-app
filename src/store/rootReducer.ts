import registrationReducer from './../scenes/auth/registration/redux/registrationReducer';
import authReducer from './../scenes/auth/redux/authReducer';
import {combineReducers} from '@reduxjs/toolkit';
import widowedReducer from '../scenes/widowedProfile/redux/widowedReducer';
import NewsfeedReducer from '../scenes/home/redux/NewsfeedReducer';
import loginReducer from '../scenes/auth/login/loginReducer';
import divorcedReducer from '../scenes/divorcedProfile/redux/divorcedReducer';
import changePasswordReducer from '../scenes/passwordChange/redux/changepasswordReducer';
import widowerReducer from '../scenes/widowerProfile/redux/widowerReducer';
import OthersDetailReducer from '../scenes/othersProfile/redux/OthersDetailReducer';
import ShortListReducer from '../scenes/shortList/redux/ShortListReducer';
import AdvanceSearchReducer from '../scenes/search/redux/AdvanceSearchReducer';
import disabilityReducer from '../scenes/disabilityProfile/redux/disabilityReducer';
import MyProfileReducer from '../scenes/profile/redux/MyProfileReducer';
import HideProfileReducer from '../scenes/hideProfile/redux/HideProfileReducer';
import ViewByReducer from '../scenes/viewBy/redux/ViewByReducer';
import contactReducer from '../scenes/contact/redux/contactReducer';
import EditProfileReducer from '../scenes/editProfile/redux/editProfileReducer';
import DownloadPdfReducer from '../scenes/shareBioData/redux/DownloadPdfReducer';
import whatsAppReducer from '../scenes/auth/whatsapp/redux/whatsAppReducer';
import forgotPasswordReducer from '../scenes/auth/forgotPassword/redux/forgotPasswordReducer';
import { LOG_OUT } from '../scenes/auth/redux/authActions';

const rootReducer = combineReducers({
  auth: authReducer,
  whatsApp: whatsAppReducer,
  registration: registrationReducer,

  newsfeed: NewsfeedReducer,

  changepassword: changePasswordReducer,

  login: loginReducer,

  othersDetail: OthersDetailReducer,

  divorcedProfile: divorcedReducer,

  widowedProfile: widowedReducer,
  shortListProfiles: ShortListReducer,

  widowerProfile: widowerReducer,
  downloadPdf: DownloadPdfReducer,
  disabilityProfile: disabilityReducer,
  myProfileDetail: MyProfileReducer,
  advanceSerach: AdvanceSearchReducer,
  hideProfile: HideProfileReducer,
  viewByProfiles: ViewByReducer,
  contactUsReducer: contactReducer,
  changePassword: changePasswordReducer,
  editProfile: EditProfileReducer,
  forgotpassword: forgotPasswordReducer,
  
});
export default rootReducer;
