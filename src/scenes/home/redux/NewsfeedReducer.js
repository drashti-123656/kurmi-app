import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  
 NewsFeedSearch: [],
 error : '',
 isfatching : 'false'

  };

  const searchProfileSlice = createSlice({
    name: 'NewsfeedReducer',
    initialState,
    reducers: {
      
     newsFeedSuccess(state,action) {
        

     }
     
     
    },
  });
  
  const {actions, reducer} = searchProfileSlice;
  
  export const NewsFeed = actions;
  export default reducer;
