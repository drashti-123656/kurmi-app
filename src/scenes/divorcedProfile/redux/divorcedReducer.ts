import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  divorcedData: [],
};

const drawerSlice = createSlice({
  name: 'divorcedProfile',
  initialState,
  reducers: {
    divorce(state, action) {
      state.divorcedData = action.payload;
    },
  },
});

const {actions, reducer} = drawerSlice;

export const {divorce} = actions;
export default reducer;
