import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import {newsFeedSuccess,fetchNewsFeed,newsFeedFail, fetchothersProfileData} from './NewsfeedReducer'

export function* searchProfile(action) {
    const payload = action.payload;
    const response = yield call(apiClient.post, API_URL.SEARCH_PROFILE, payload);
    console.log("newsfeedResponse===>>",response)
    
    if (response.ok) {
         yield put(newsFeedSuccess(response.data.data));
         
        } 
    }

    export function* logUser(action) {
        const payload = action.payload;
        const response = yield call(apiClient.post, API_URL.OTHER_PROFILE_DETAILS, payload);
      
        if (response.ok) {
         
          yield put(fetchothersProfileData(response.data.data));
        }
      }