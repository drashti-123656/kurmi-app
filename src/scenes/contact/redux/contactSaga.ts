import {call} from 'redux-saga/effects';
import apiClient from './../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {navigate} from '../../../navigation/RootNavigation';
import { showMessage, hideMessage } from "react-native-flash-message";

export function* contactUser(action) {
  const payload = action.payload;
  const response = yield call(apiClient.post, API_URL.CONTACT_USER, payload);
  
  if (response.ok) {
    showMessage({
        message: "Successfull",
        description: " Your Contact Details are saved",
        type: "success",
      });

    navigate('DashboardNavigation');
  }
}
