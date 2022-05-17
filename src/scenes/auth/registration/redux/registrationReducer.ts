import {createSlice} from '@reduxjs/toolkit';
import translate from '../../../../translations/configTranslations';
import {heightDropdwonList} from '../../../../utils/constants/dropDownList';
const initialState = {
  samparkData: {
    mobileNo: '',
    whatsAppNo: '',
    presentAdd: '',
    permanentAdd: '',
  },
  parivarikData: {
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherMayaka: '',
    brother: '',
    sister: '',
    land: '',
  },
  registrationData: {
    registered: false,
    isRegistering: false,

    error: '',
  },
  dharmikJankariData: {
    gotra: '',
    native: '',
    birthtime: '',
    birthplace: '',
    zodiacsign: '',
    auspicious: '',
  },
  dropDownsData: {
    zodiacSign: [],
    auspicious: [],
    height: heightDropdwonList,
    maritalstatus: [],
    education: [],
    job: [],

    disability: [
      {id: 1, name: translate('Disability.Yes')},
      {id: 2, name: translate('Disability.No')},
    ],

    profilemaker: [],
    birthdate: [],
    country: [],
    state: [],
    city: [],
    gotra: [],
    land: [],
  },
  registerData: {
    isVerifiying: false,
    verifyed: false,

    emailid: '',
    mobilenumber: '',
    gender: '',
    profilemaker: '',
    firstname: '',
    lastname: '',
    birthdate: '',
    ProfilePic: {},
    country: '',
    state: '',
    city: '',
    password: '',
  },

  personalinfoData: {
    height: '',
    maritalstatus: '',
    education: '',
    job: '',
    colour: '',
    disability: '',
    bloodgroup: '',
  },
};

const registerationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registrationStarted(state, action) {
      state.registrationData.isRegistering = true;
    },
    registrationSuccess(state, action) {
      state.registrationData.registered = true;
      state.registrationData.isRegistering = false;
    },
    registrationsFail(state, action) {
      state.registrationData.registered = false;
      state.registrationData.isRegistering = false;
      state.registrationData.error = action.payload;
    },

    verifyingStarted(state, action) {
      state.registerData.isVerifiying = true;
    },
    verifyingSuccess(state, action) {
      state.registerData.verifyed = true;
      state.registerData.isVerifiying = false;
      // state.registerData.emailid = action.payload.userEmail;
      // state.registerData.mobilenumber = action.payload.userMobileNo;
    },
    verifyingFail(state, action) {
      state.registerData.verifyed = false;
      state.registerData.isVerifiying = false;
      //state.registerData.error = action.payload;
    },

    sampark(state, action) {
      state.samparkData.mobileNo = action.payload.userContactInfoContactNo;
      state.samparkData.whatsAppNo = action.payload.userContactInfoWhatsappNo;
      state.samparkData.presentAdd =
        action.payload.userContactInfoPresentAddress;
      state.samparkData.permanentAdd =
        action.payload.userContactInfoPermanentAddress;
    },

    parivarik(state, action) {
      state.parivarikData.fatherName = action.payload.userFamilyInfoFatherName;
      state.parivarikData.fatherOccupation =
        action.payload.userFamilyInfoFatherOccupation;
      state.parivarikData.motherName = action.payload.userFamilyInfoMotherName;
      state.parivarikData.motherMayaka =
        action.payload.userFamilyInfoMotherOccupation;
      state.parivarikData.brother =
        action.payload.userFamilyInfoNoOfMarriedBrothers;
      state.parivarikData.sister =
        action.payload.userFamilyInfoNoOfMarriedSisters;
      state.parivarikData.land = action.payload.userFamilyInfoLand;
    },

    dharmikJankari(state, action) {
      state.dharmikJankariData.gotra = action.payload.userReligiousInfoGotra;
      state.dharmikJankariData.native =
        action.payload.userReligiousInfoMotherGotra;
      state.dharmikJankariData.birthtime =
        action.payload.userReligiousInfoTimeOfBirth;
      state.dharmikJankariData.birthplace =
        action.payload.userReligiousInfoPlaceOfBirth;
      state.dharmikJankariData.zodiacsign =
        action.payload.userReligiousInfoZodiac;
      state.dharmikJankariData.auspicious =
        action.payload.userReligiousInfoManglik;
    },

    fetchZodiacDropdownSuccess(state, action) {
      state.dropDownsData.zodiacSign = action.payload;
    },

    fetchGotraDropdownSuccess(state, action) {
      state.dropDownsData.gotra = action.payload;
    },

    fetchLandDropdownSuccess(state, action) {
      state.dropDownsData.land = action.payload;
    },

    fetchAuspiciousDropdownSuccess(state, action) {
      state.dropDownsData.auspicious = action.payload;
    },
    fetchHeightDropdownSuccess(state, action) {
      state.dropDownsData.height = action.payload;
    },
    fetchDisabilityDropdownSuccess(state, action) {
      state.dropDownsData.disability = action.payload;
    },
    fetchMaritalstatusDropdownSuccess(state, action) {
      state.dropDownsData.maritalstatus = action.payload;
    },
    fetchEducationDropdownSuccess(state, action) {
      state.dropDownsData.education = action.payload;
    },
    fetchJobDropdownSuccess(state, action) {
      state.dropDownsData.job = action.payload;
    },

    register(state, action) {
      state.registerData.emailid = action.payload.where.userEmail;
      state.registerData.mobilenumber = action.payload.where.userMobileNo;
      state.registerData.gender = action.payload.userGender;
      state.registerData.profilemaker = action.payload.userProfileCreatedBy;
      state.registerData.firstname = action.payload.userFirstName;
      state.registerData.lastname = action.payload.userLastName;
      state.registerData.birthdate = action.payload.userDob;
      state.registerData.ProfilePic = action.payload.userProfileImage;

      state.registerData.country = action.payload.userCountry;
      state.registerData.state = action.payload.userState;
      state.registerData.city = action.payload.userCity;
      state.registerData.password = action.payload.password;
    },

    fetchProfilemakerDropdownSuccess(state, action) {
      state.dropDownsData.profilemaker = action.payload;
    },

    fetchCountryDropdownSuccess(state, action) {
      state.dropDownsData.country = action.payload;
    },

    fetchStateDropdownSuccess(state, action) {
      state.dropDownsData.state = action.payload;
    },

    fetchCityDropdownSuccess(state, action) {
      state.dropDownsData.city = action.payload;
    },

    personalInfo(state, action) {
      state.personalinfoData.height = action.payload.userPersonalInfoHeight;
      state.personalinfoData.maritalstatus =
        action.payload.userPersonalInfoMaritalStatusId;
      state.personalinfoData.education =
        action.payload.userEducationInfoEducation;
      state.personalinfoData.job = action.payload.userEducationInfoOccupation;

      state.personalinfoData.disability =
        action.payload.userPersonalInfoDisability;
    },
  },
});

const {actions, reducer} = registerationSlice;

export const {
  registrationStarted,
  sampark,
  parivarik,
  registrationSuccess,
  registrationsFail,
  dharmikJankari,
  fetchZodiacDropdownSuccess,
  fetchAuspiciousDropdownSuccess,
  fetchHeightDropdownSuccess,
  fetchMaritalstatusDropdownSuccess,
  fetchEducationDropdownSuccess,
  fetchJobDropdownSuccess,
  register,
  fetchProfilemakerDropdownSuccess,
  fetchGotraDropdownSuccess,
  fetchCountryDropdownSuccess,
  fetchStateDropdownSuccess,
  fetchCityDropdownSuccess,
  personalInfo,
  fetchDisabilityDropdownSuccess,
  fetchLandDropdownSuccess,
  verifyingStarted,
  verifyingSuccess,
  verifyingFail,
} = actions;
export default reducer;
