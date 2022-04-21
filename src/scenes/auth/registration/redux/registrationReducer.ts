import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  samparkData: {
    mobileNo: '',
    whatsAppNo: '',
    presentAdd: '',
    permanentAdd: '',
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
  },
});

export const {sampark} = authSlice.actions;
export default authSlice.reducer;
