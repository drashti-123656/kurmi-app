import {createSlice} from '@reduxjs/toolkit';

const initialState = {
 viewByProfileData: [],
  viewByUsersData :[],
  error: '',
  isfetching: false,

 
};

const viewProfileSlice = createSlice({
  name: 'ViewByReducer',
  initialState,
  reducers: {
  

    viewBySuccess(state, action) {
      state.viewByProfileData = action.payload;
    },
     viewByFail(state, action) {
      state.viewByProfileData.isfetching = false;
      state.viewByProfileData.error = action.payload;
    },

    fetchViewByUserDataStarted(state) {
      state.isfetching = true;
    },
    fetchViewByDataSuccess(state,action) {
      state.viewByUsersData = action.payload;
      state.isfetching = false;
    },
    fetchViewByUserDataFail(state){
      state.isfetching = false;
      state.error = true;
    },
    },
   
  },
);

const {actions, reducer} = viewProfileSlice;

export const {viewBySuccess, viewByFail,fetchViewByUserDataStarted,fetchViewByDataSuccess,fetchViewByUserDataFail} = actions;
export default reducer;
