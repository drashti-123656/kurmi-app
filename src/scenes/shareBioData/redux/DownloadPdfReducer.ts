import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  downloadpdfdata: {
    isFetching: false,
    downloadingProfileError: '',
    downloadProfileSuccess: false,
    downloadingProfile: false,
    downloadedProfileFilePath: '',
  },
};

const downloadPdfSlice = createSlice({
  name: 'downloadPdf',
  initialState,
  reducers: {
    downloadProfile: state => {
      state.downloadingProfile = true;
      state.downloadProfileSuccess = false;
      state.downloadedProfileFilePath = '';
    },
    downloadProfileSuccess: (state, {payload}) => {
      state.downloadingProfile = false;
      state.downloadProfileSuccess = true;
      state.downloadedProfileFilePath = payload;
    },
    clearProfileDownloadStatus: state => {
      state.downloadProfileSuccess = false;
    },
    downloadProfileFail: (state, {payload}) => {
      state.downloadingProfile = false;
      state.downloadProfileSuccess = true;
      state.downloadingProfileError = payload;
    },
  },
});

const {actions, reducer} = downloadPdfSlice;

export const {
  downloadProfile,
  downloadProfileSuccess,
  clearProfileDownloadStatus,
  downloadProfileFail,
} = actions;
export default reducer;
