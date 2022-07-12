import {all, takeLatest} from 'redux-saga/effects';
import {LOG_IN, LOG_USER} from '../scenes/auth/redux/authActions';
import {logUser} from '../scenes/auth/whatsapp/redux/whatsaapSaga';
import {CONTACT_USER} from '../scenes/contact/redux/contactAction';
import {contactUser} from '../scenes/contact/redux/contactSaga';
import {loginUser} from '../scenes/auth/redux/authSagas';
import {
  auspiciousDropdown,
  cityDropdown,
  countryDropdown,
  educationDropdown,
  gotraDropdown,
  jobDropdown,
  disabiltyDropdown,
  landDropdown,
  martialstatusDropdown,
  profilemakerDropdown,
  registerUser,
  registerUserVerification,
  stateDropdown,
  zodiacDropDowns,
  heightDropdown,
} from '../scenes/auth/registration/redux/registerSagas';
import {
  FETCH_AUSPICIOUS_DROPDOWN,
  FETCH_CITY_DROPDOWN,
  FETCH_COUNTRY_DROPDOWN,
  FETCH_DISABILITY,
  FETCH_EDUCATION_DROPDOWN,
  FETCH_GOTRA_DROPDOWN,
  FETCH_HEIGHT,
  FETCH_JOB_DROPDOWN,
  FETCH_LAND_DROPDOWN,
  FETCH_MARITALSTATUS_DROPDOWN,
  FETCH_PROFILECREATER_DROPDOWN,
  FETCH_STATE_DROPDOWN,
  FETCH_ZODIC_SIGN,
  REGISTER_USER,
  VERIFY_USER,
} from '../scenes/auth/registration/redux/registrationActions';
import {ADVANCED_SEARCH_USER} from '../scenes/search/redux/AdvanceSearchAction';
import {advancesearchStatus} from '../scenes/search/redux/AdvancedSearchSaga';
import {CHANGE_PASSWORD} from '../scenes/passwordChange/redux/passwordAction';
import {changePassword} from '../scenes/passwordChange/redux/passwordSaga';
import {DIVORCED_PROFILE} from '../scenes/divorcedProfile/redux/divorcedAction';
import {divorcedStatus} from '../scenes/divorcedProfile/redux/divorcedSaga';
import {OTHERS_PROFILE_DETAILS} from '../scenes/othersProfile/redux/OthersDetailAction';
import {otherProfileDetails} from '../scenes/othersProfile/redux/OthersDetailSaga';
import {searchProfile} from '../scenes/home/redux/NewsfeedSaga';
import {FETCH_SEARCH_PROFILE} from '../scenes/home/redux/NewsfeedAction';
import {DOWNLOAD_PDF} from '../scenes/shareBioData/redux/DownloadPdfAction';
import {downloadPdf} from '../scenes/shareBioData/redux/DownloadPdfSaga';
import {
  SHORT_LISTED_USERS,
  SHORT_LIST_PROFILE,
} from '../scenes/shortList/redux/ShortListAction';
import {
  shortlistedUsers,
  shortListProfile,
} from '../scenes/shortList/redux/ShortListSaga';

import {WIDOWER_PROFILE} from '../scenes/widowerProfile/redux/widowerAction';
import {widowerStatus} from '../scenes/widowerProfile/redux/widowerSaga';
import {WIDOWED_PROFILE} from '../scenes/widowedProfile/redux/widowedAction';
import {widowedStatus} from '../scenes/widowedProfile/redux/widowedSaga';
import {DISABILITY_PROFILE} from '../scenes/disabilityProfile/redux/disabilityAction';
import {disabilityStatus} from '../scenes/disabilityProfile/redux/disabilitySaga';
import {MY_PROFILE_DETAILS} from '../scenes/profile/redux/MyProfileAction';
import {myProfileDetails} from '../scenes/profile/redux/MyProfileSaga';
import {hideprofileStatus} from '../scenes/hideProfile/redux/HideProfileSaga';
import {TOGGLE_SWITCH_ACTIVE} from '../scenes/hideProfile/redux/HideProfileAction';
import {
  VIEW_BY_ID_PROFILE,
  VIEW_BY_USERS,
} from '../scenes/viewBy/redux/ViewByAction';
import {viewByProfile, viewByUsers} from '../scenes/viewBy/redux/ViewBySaga';
import {EDIT_PROFILE} from '../scenes/editProfile/redux/editProfileAction';
import {editProfile} from '../scenes/editProfile/redux/editprofileSaga';
import {
  addgalleryImage,
  removeImage,
  setProfilePicture,
} from '../scenes/galleryImage/redux/galleryImageSaga';
import {
  ADD_GALLERY_IMAGE,
  REMOVE_IMAGE,
  SET_PROFILE_PICTURE,
} from '../scenes/galleryImage/redux/galleryImageAction';
export default function* sagas() {
  yield all([
    takeLatest(LOG_USER, logUser),
    takeLatest(CONTACT_USER, contactUser),
    takeLatest(CHANGE_PASSWORD, changePassword),
    takeLatest(LOG_IN, loginUser),
    takeLatest(REGISTER_USER, registerUser),
    takeLatest(FETCH_ZODIC_SIGN, zodiacDropDowns),
    takeLatest(FETCH_AUSPICIOUS_DROPDOWN, auspiciousDropdown),
    takeLatest(FETCH_MARITALSTATUS_DROPDOWN, martialstatusDropdown),
    takeLatest(FETCH_EDUCATION_DROPDOWN, educationDropdown),
    takeLatest(FETCH_JOB_DROPDOWN, jobDropdown),
    takeLatest(VERIFY_USER, registerUserVerification),
    takeLatest(FETCH_PROFILECREATER_DROPDOWN, profilemakerDropdown),
    takeLatest(FETCH_COUNTRY_DROPDOWN, countryDropdown),
    takeLatest(FETCH_STATE_DROPDOWN, stateDropdown),
    takeLatest(FETCH_CITY_DROPDOWN, cityDropdown),
    takeLatest(FETCH_GOTRA_DROPDOWN, gotraDropdown),
    takeLatest(FETCH_LAND_DROPDOWN, landDropdown),
    // takeLatest(DIVORCED_PROFILE, divorcedStatus),
    takeLatest(FETCH_SEARCH_PROFILE, searchProfile),
    takeLatest(DIVORCED_PROFILE, divorcedStatus),
    takeLatest(OTHERS_PROFILE_DETAILS, otherProfileDetails),
    takeLatest(SHORT_LIST_PROFILE, shortListProfile),
    takeLatest(WIDOWED_PROFILE, widowedStatus),
    takeLatest(WIDOWER_PROFILE, widowerStatus),
    takeLatest(DISABILITY_PROFILE, disabilityStatus),
    takeLatest(MY_PROFILE_DETAILS, myProfileDetails),
    takeLatest(SHORT_LISTED_USERS, shortlistedUsers),
    takeLatest(ADVANCED_SEARCH_USER, advancesearchStatus),
    takeLatest(TOGGLE_SWITCH_ACTIVE, hideprofileStatus),
    takeLatest(VIEW_BY_ID_PROFILE, viewByProfile),
    takeLatest(VIEW_BY_USERS, viewByUsers),
    takeLatest(EDIT_PROFILE, editProfile),
    takeLatest(DOWNLOAD_PDF, downloadPdf),
    takeLatest(FETCH_HEIGHT, heightDropdown),
    takeLatest(FETCH_DISABILITY, disabiltyDropdown),
    takeLatest(ADD_GALLERY_IMAGE, addgalleryImage),
    takeLatest(REMOVE_IMAGE, removeImage),
    takeLatest(SET_PROFILE_PICTURE, setProfilePicture),
  ]);
}
