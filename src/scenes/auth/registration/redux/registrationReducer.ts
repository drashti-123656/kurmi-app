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
  },
};

const authSlice = createSlice({
  name: 'sampark',
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
  },
});

export const {
  sampark,
  parivarik,
  registrationSuccess,
  registrationsFail,
  dharmikJankari,
  fetchZodiacDropdownSuccess,
  fetchAuspiciousDropdownSuccess
} = authSlice.actions;
export default authSlice.reducer;
