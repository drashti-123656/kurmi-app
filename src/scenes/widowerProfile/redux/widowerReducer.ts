import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  widowerData: [],
};

const widowerSlice = createSlice({
  name: 'widowerProfile',
  initialState,
  reducers: {
    widower(state, action) {
      state.widowerData = action.payload;
    },
  },
});

const {actions, reducer} = widowerSlice;

export const {widower} = actions;
export default reducer;