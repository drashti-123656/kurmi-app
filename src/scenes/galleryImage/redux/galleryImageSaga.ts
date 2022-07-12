import {call} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {showMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
export function* addgalleryImage(action) {
  const payload = action.payload;
  const {ok} = yield call(apiClient.post, API_URL.ADD_GALLERY_IMAGE, payload);

  if (ok) {
    showMessage({
      message: 'Image is added......',
      type: 'success',
    });
  }
}

export function* removeImage({id}) {
  const {ok} = yield call(apiClient.delete, `${API_URL.REMOVE_IMAGE}/${id}`);
  if (ok) {
    showMessage({
      message: 'image Deleted successfully......',
      type: 'success',
    });
  }
}

export function* setProfilePicture({id}) {
  const {ok} = yield call(
    apiClient.post,
    `${API_URL.SET_PROFILE_PICTURE}/${id}`,
  );
  if (ok) {
    showMessage({
      message: 'image changed successfully......',
      type: 'success',
    });
  }
}
