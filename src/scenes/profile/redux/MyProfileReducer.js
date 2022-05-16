import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  
    isFetching: false,
    error: '',
  
  myProfileData: {
    
    userSignupType: '',
    userUserName: '',
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userMobileNo: '',
    userDob: '',
    userGender: '',
    userProfileCreatedBy: {
      profileCreatedByNameHi: '',
      profileCreatedByNameEn: '',
      profileCreatedByStatus: '',
      profileCreatedById: 0,
      profileCreatedByCreatedAt: '',
      profileCreatedByUpdatedAt: '',
    },
    userCountry: {
      countryShortName: '',
      countryName: '',
      countryPhoneCode: '',
      countryStatus: '',
      countryId: 0,
      countryCreatedAt: '',
      countryUpdatedAt: '',
    },
    userState: {
      name: '',
      countryId: 0,
      stateStatus: '',
      stateId: '',
      stateCreatedAt: '',
      stateUpdatedAt: '',
    },
    userCity: {
      cityName: '',
      cityStateId: 0,
      cityStatus: '',
      cityId: '',
      cityCreatedAt: '',
      cityUpdatedAt: '',
    },
    userTown: null,
    userReligiousInfo: {
      userReligiousInfoTimeOfBirth: '',
      userReligiousInfoPlaceOfBirth: '',
      userReligiousInfoGotra: {
        gotraTitleHi: '',
        gotraTitleEn: '',
        gotraStatus: '',
        gotraId: 0,
        gotraCreatedAt: null,
        gotraUpdatedAt: null,
      },
      userReligiousInfoSubCaste: null,
      userReligiousInfoMotherTongue: null,
      userReligiousInfoZodiac: {
        zodiacTitleHi: ' ',
        zodiacTitleEn: '',
        zodiacStatus: '',
        zodiacId: 0,
        zodiacCreatedAt: null,
        zodiacUpdatedAt: null,
      },
      userReligiousInfoManglik: '',
      userReligiousInfoNakshatra: null,
      userReligiousInfoMotherGotra: '',
      userReligiousInfoId: 0,
      userReligiousInfoCreatedAt: '',
      userReligiousInfoUpdatedAt: '',
    },
    userContactInfo: {
      userContactInfoContactNo: '',
      userContactInfoWhatsappNo: '',
      userContactInfoPresentAddress: '',
      userContactInfoPermanentAddress: '',
      userContactInfoId: 0,
      userContactInfoCreatedAt: '',
      userContactInfoUpdatedAt: '',
    },
    userEducationInfo: {
      userEducationInfoEducation: {
        educationTitleHi: '',
        educationTitleEn: '',
        educationStatus: '',
        educationId: 0,
        educationCreatedAt: null,
        educationUpdatedAt: null,
      },
      userEducationInfoOccupation: {
        occupationTitleHi: '',
        occupationTitleEn: '',
        occupationStatus: '',
        occupationId: 0,
        occupationCreatedAt: null,
        occupationUpdatedAt: null,
      },
      userEducationInfoProfession: null,
      userEducationInfoOccupationDetails: null,
      userEducationInfoAnnualIncome: null,
      userEducationInfoId: 0,
      userEducationInfoCreatedAt: '',
      userEducationInfoUpdatedAt: '',
    },
    userFamilyInfo: {
      userFamilyInfoFatherName: '',
      userFamilyInfoFatherOccupation: {
        occupationTitleHi: '',
        occupationTitleEn: '',
        occupationStatus: '',
        occupationId: 0,
        occupationCreatedAt: null,
        occupationUpdatedAt: null,
      },
      userFamilyInfoMotherName: '',
      userFamilyInfoMotherOccupation: null,
      userFamilyInfoNoOfMarriedBrothers: '',
      userFamilyInfoNoOfUnmarriedBrothers: '',
      userFamilyInfoNoOfMarriedSisters: '',
      userFamilyInfoNoOfUnmarriedSisters: '',
      userFamilyInfoMaternalUnclesName: null,
      userFamilyInfoMaternalUnclesGotra: null,
      userFamilyInfoLand: 0,
      userFamilyInfoHouse: '',
      userFamilyInfoCar: '',
      userFamilyInfoMotherMaika: '',
      userFamilyInfoNoOfSister: '',
      userFamilyInfoNoOfBrother: '',
      userFamilyInfoId: 0,
      userFamilyInfoCreatedAt: '',
      userFamilyInfoUpdatedAt: '',
    },
    userPersonalInfo: {
      userPersonalInfoMaritalStatusId: {
        maritalStatusTitleHi: '',
        maritalStatusTitleEn: '',
        maritalStatusStatus: '',
        maritalStatusId: 0,
        maritalStatusCreatedAt: null,
        maritalStatusUpdatedAt: null,
      },
      userPersonalInfoComplexion: null,
      userPersonalInfoHeight: 0,
      userPersonalInfoWeight: null,
      userPersonalInfoDiet: null,
      userPersonalInfoDisability: 0,
      userPersonalInfoBloodGroup: null,
      userPersonalInfoId: 57,
      userPersonalInfoCreatedAt: '',
      userPersonalInfoUpdatedAt: '',
    },
    userPartnerPreference: null,
    userIsVisible: '',
    userIsActive: '',
    userProfileImage: null,
    userId: 0,
    userCreatedAt: '',
    userUpdatedAt: '',
    userAge: '',
  },
};

const searchProfileSlice = createSlice({
  name: 'myprofile',
  initialState,
  reducers: {
    fetchmyProfileDataStarted(state, action) {
      state.isFetching = true;
    },
    fetchmyProfileDataSuccess(state, action) {
      state.myProfileData = action.payload;
      state.isFetching = false;
    },
    fetchloadingDataFail(state, action) {
      state.isFetching = false;
      state.error=true
    },
   
  },
});

const {actions, reducer} = searchProfileSlice;

export const {fetchmyProfileDataStarted, fetchmyProfileDataSuccess,fetchloadingDataFail} = actions;
export default reducer;
