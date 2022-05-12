import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  widowedData: [],
};

const widowedSlice = createSlice({
  name: 'widowedProfile',
  initialState,
  reducers: {
    widowed(state, action) {
      state.widowedData = action.payload;
    },
  },
});

const {actions, reducer} = widowedSlice;

export const {widowed} = actions;
export default reducer;
