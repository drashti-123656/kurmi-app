import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  divorcedData: [],
};

const divorcedSlice = createSlice({
  name: 'divorcedProfile',
  initialState,
  reducers: {
    divorce(state, action) {
      state.divorcedData = action.payload;
    },
  },
});

const {actions, reducer} = divorcedSlice;

export const {divorce} = actions;
export default reducer;
