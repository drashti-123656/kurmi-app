import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  disabilityData: [],
};

const disabilitySlice = createSlice({
  name: 'disabilityProfile',
  initialState,
  reducers: {
    disability(state, action) {
      state.disabilityData = action.payload;
    },
  },
});

const {actions, reducer} = disabilitySlice;

export const {disability} = actions;
export default reducer;
