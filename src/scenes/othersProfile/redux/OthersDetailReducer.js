import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  othersProfileData: {
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
      userReligiousInfoGotra: '',
      userReligiousInfoSubCaste: null,
      userReligiousInfoMotherTongue: null,
      userReligiousInfoZodiac: null,
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
      userFamilyInfoFatherOccupation: '',
      userFamilyInfoMotherName: '',
      userFamilyInfoMotherOccupation: null,
      userFamilyInfoNoOfMarriedBrothers: '',
      userFamilyInfoNoOfUnmarriedBrothers: '',
      userFamilyInfoNoOfMarriedSisters: '',
      userFamilyInfoNoOfUnmarriedSisters: '',
      userFamilyInfoMaternalUnclesName: null,
      userFamilyInfoMaternalUnclesGotra: null,
      userFamilyInfoLand: {
        landTitleHi: ' ',
        landTitleEn: ' ',
        landStatus: '',
        landId: 0,
        landCreatedAt: null,
        landUpdatedAt: null,
      },
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
      userPersonalInfoHeight: {
        name: ' ',
        heightStatus: ' ',
        heightId: 0,
        heightCreatedAt: ' ',
        heightUpdatedAt: ' ',
      },
      userPersonalInfoWeight: null,
      userPersonalInfoDiet: null,
      userPersonalInfoDisability: {
        nakshatraTitleHi: ' ',
        nakshatraTitleEn: ' ',
        nakshatraStatus: ' ',
        nakshatraId: 0,
        nakshatraCreatedAt: null,
        nakshatraUpdatedAt: null,
      },
      userPersonalInfoBloodGroup: null,
      userPersonalInfoId: 57,
      userPersonalInfoCreatedAt: '',
      userPersonalInfoUpdatedAt: '',
    },
    userPartnerPreference: null,
    userIsVisible: '',
    userIsActive: '',
    userProfileImage: '',
    userId: 0,
    userCreatedAt: '',
    userUpdatedAt: '',
    userAge: '',
    isFetching: false,
    error: '',
  },
};

const searchProfileSlice = createSlice({
  name: 'othersDetail',
  initialState,
  reducers: {
    fetchOthersProfileDataStarted(state) {
      state.isFetching = true;
    },
    fetchOthersProfileDataSuccess(state, action) {
      state.othersProfileData = action.payload;
      state.isFetching = false;
    },
    fetchOthersProfileDataFail(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = searchProfileSlice;

export const {
  fetchOthersProfileDataStarted,
  fetchOthersProfileDataSuccess,
  fetchOthersProfileDataFail,
} = actions;
export default reducer;
