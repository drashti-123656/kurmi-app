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
  registrationData:{
    registered: false,
    isRegistering: false,
    error:''
  }
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
  },
});

export const {sampark, parivarik, registrationSuccess, registrationsFail} = authSlice.actions;
export default authSlice.reducer;
