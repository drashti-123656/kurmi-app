import {call, put, select} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';
import {API_URL} from '../../../services/webConstants';
import RNFetchBlob from 'rn-fetch-blob';
import {
  downloadProfile,
  downloadProfileSuccess,
  downloadProfileFail,
} from './DownloadPdfReducer';
import {base_URL} from '../../../services/httpServices';

export function* downloadPdf(action: DownloadLedgerAction) {
  try {
    const {
      authData: {token},
    } = yield select(state => state.auth);
    console.log('token===>', token);
    yield put(downloadProfile({}));
    const response: string = yield call(downloadFile, token);
    yield put(downloadProfileSuccess(response));
  } catch (err) {
    console.log('Unable to legder Invoice : ', err);
    showMessage({
      message: 'downloaded!!!!',
      type: 'success',
    });
    yield put(downloadProfileFail(err));
  }
}

const downloadFile = async (token: string) => {
  const url = `${base_URL}${API_URL.DOWNLOAD_PDF}`;

  return new Promise((resolve, reject) => {
    RNFetchBlob.config({
      fileCache: true,
      path: RNFetchBlob.fs.dirs.DocumentDir + '/Profile.pdf',
    })

      .fetch('GET', url, {
        Authorization: `Bearer ${token}`,
      })
      .then(response => {
        resolve(response.path());
      })
      .catch(err => {
        reject(err);
      });
  });
};
