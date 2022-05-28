import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  hideProfileData:[],
  isActive: false,
  error: '',
};

const hideprofileSlice = createSlice({
  name: 'hideProfile',
  initialState,
  reducers: {
    toggleOn(state) {
      state.isActive = true;
      
    },
    toggleOff(state, action) {
      state.hideProfileData = action.payload;
      state.isActive = false;
    },
    toggleError(state) {
      state.isActive = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = hideprofileSlice;

export const {toggleOn, toggleOff, toggleError} = actions;
export default reducer;
