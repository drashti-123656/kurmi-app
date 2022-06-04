import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  profileUpdateddata: [],
  error: '',
  isUpdating: false,
};

const editProfileSlice = createSlice({
  name: 'EditProfileReducer',
  initialState,
  reducers: {
    updateProfile(state) {
      state.isUpdating = true;
    },

    updatedProfileSuccess(state, action) {
      state.profileUpdateddata = action.payload;
      state.isUpdating = false;
    },
    updatedProfileFail(state) {
      state.isUpdating = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = editProfileSlice;

export const {updateProfile, updatedProfileSuccess, updatedProfileFail} =
  actions;
export default reducer;
