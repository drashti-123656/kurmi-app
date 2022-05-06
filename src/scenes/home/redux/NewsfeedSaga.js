import {call, put} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';

export function* searchProfile(action) {
    const payload = action.payload;
    const response = yield call(apiClient.post, API_URL.SEARCH_PROFILE, payload);
    console.log("newsfeedResponse===>>",response)
    
    if (response.ok) {
        showMessage({
            message: 'successfull',
            type: 'successfull',
            backgroundColor : 'green'
          });
        }
    }