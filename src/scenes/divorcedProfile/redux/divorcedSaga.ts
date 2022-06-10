// import {showMessage} from 'react-native-flash-message';
// import {call, put, select} from 'redux-saga/effects';
// import apiClient from '../../../services/httpServices';
// import {API_URL} from '../../../services/webConstants';
// import {PAGE_SIZE} from '../../../utils/constants/appConstants';
// import {
//   fetchDivorcedDataFail,
//   fetchDivorcedDataStarted,
//   fetchDivorcedDataSuccess,
// } from './divorcedReducer';

// export function* divorcedStatus(action) {
//   const payload = action.payload;

//   yield put(fetchDivorcedDataStarted({}));

//   const {data, ok} = yield call(apiClient.post, API_URL.DIVORCED_DATA, payload);

//   let finalProfileList = [];
//   if (payload.page > 1) {
//     const {divorcedData} = yield select(state => state.divorcedProfile);
//     finalProfileList = divorcedData.concat(data.data);
//   } else {
//     finalProfileList = data.data;
//   }

//   if (ok) {
//     yield put(
//       fetchDivorcedDataSuccess({
//         profile: finalProfileList,
//         isPaginationRequired: data.data.length === PAGE_SIZE,
//         pageNumber: payload.page,
//       }),
//     );
//   } else {
//     yield put(fetchDivorcedDataFail({}));
//     showMessage({
//       message: 'Ops, something went wrong',
//       type: 'danger',
//     });
//   }
// }

import {showMessage} from 'react-native-flash-message';
import {call, put, select} from 'redux-saga/effects';
import apiClient from '../../../services/httpServices';
import {API_URL} from '../../../services/webConstants';
import {PAGE_SIZE} from '../../../utils/constants/appConstants';
import {
  fetchDivorcedDataStarted,
  fetchDivorcedDataSuccess,
  fetchDivorcedDataFail,
} from './divorcedReducer';

export function* divorcedStatus(action) {
  const payload = action.payload;

  yield put(fetchDivorcedDataStarted({}));

  const {data, ok} = yield call(apiClient.post, API_URL.DIVORCED_DATA, payload);

  let finalProfileList = [];
  if (payload.page > 1) {
    const {divorcedData} = yield select(state => state.divorcedProfile);
    finalProfileList = divorcedData.concat(data.data);
  } else {
    finalProfileList = data.data;
  }

  if (ok) {
    console.log('data======================>', payload.page);
    yield put(
      fetchDivorcedDataSuccess({
        profile: finalProfileList,
        isPaginationRequired: data.data.length === PAGE_SIZE,
        pageNumber: payload.page,
      }),
    );
  } else {
    yield put(fetchDivorcedDataFail({}));
    showMessage({
      message: 'Ops, something went wrong',
      type: 'danger',
    });
  }
}
