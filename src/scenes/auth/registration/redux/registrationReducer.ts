import {createSlice} from '@reduxjs/toolkit';

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
    caste: '',
    native: '',
    birthtime: '',
    birthplace: '',
    zodiacsign: '',
    auspicious: '',
  },
  dropDownsData: {
    zodiacSign: [],
    auspicious: [],
    height: [
      {id: 1, name: '5ft 5in'},
      {id: 2, name: '5ft 9in'},
    ],
    maritalstatus: [],
    education: [],
    job: [],
    colour: [],
    disability: [],
    bloodgroup: [],
    profilemaker: [],
    birthdate: [],
    country: [],
    state: [],
    city: [],
  },
  registerData: {
    emailid: '',
    mobilenumber: '',
    profilemaker: '',
    firstname: '',
    lastname: '',
    birthdate: '',
    caste: '',
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
      state.parivarikData.land = action.payload.fatherName;
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
    dharmikJankari(state, action) {
      state.dharmikJankariData.caste = action.payload.userReligiousInfoGotra;
      state.dharmikJankariData.native =
        action.payload.userReligiousInfoSubCaste;
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

    fetchAuspiciousDropdownSuccess(state, action) {
      state.dropDownsData.auspicious = action.payload;
    },
    fetchHeightDropdownSuccess(state, action) {
      state.dropDownsData.height = action.payload;
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
      state.registerData.emailid = action.payload.userEmail;
      state.registerData.mobilenumber = action.payload.userMobileNo;
      state.registerData.profilemaker = action.payload.profileCreatedByNameHi;
      state.registerData.firstname = action.payload.userName;
      state.registerData.lastname = action.payload;
      state.registerData.birthdate = action.payload.userDob;
      state.registerData.caste = action.payload.userPersonalInfoHeight;
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
      state.personalinfoData.colour = action.payload.userPersonalInfoComplexion;
      state.personalinfoData.disability =
        action.payload.userPersonalInfoDisability;
      state.personalinfoData.bloodgroup =
        action.payload.userPersonalInfoBloodGroup;
    },
  },
});

const {actions, reducer} = registerationSlice;

export const {
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

  fetchCountryDropdownSuccess,
  fetchStateDropdownSuccess,
  fetchCityDropdownSuccess,
  personalInfo,
} = actions;
export default reducer;
