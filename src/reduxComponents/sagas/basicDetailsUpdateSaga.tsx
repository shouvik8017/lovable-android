import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { BASIC_DETAILS_UPDATE } from '../constants';
import {
  basicDetailsUpdate,
  basicDetailsUpdateFailure,
  basicDetailsUpdateSuccess,
  showErrorPopUp,
} from '../actions';
import { BASEURL, BasicDetailsUpdate } from '../../constants/ApiUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* updateBasicDetailsSaga(action) {
  try {
    // Simulate API call
    const user = yield call(updateBasicDetailsApi, action.payload);
    console.log('0-0-0-0-0-0-0-0-0-0-0-0', user);
    
    if (user.status) {
      yield put(basicDetailsUpdateSuccess(user));
    }
    else {
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    yield put(basicDetailsUpdateFailure(error.message));
  }
}

const updateBasicDetailsApi = async (userData) => {
  // Simulate API call
  const url = BASEURL + BasicDetailsUpdate;
  try {
    const authToken = await AsyncStorage.getItem('accesstoken');
    console.log('0-0-0-0-0-0-0-0-0-0-0-0---->>>>');
    const response = await axios.post(url, userData, {
      headers: {
        'Authorization': 'Bearer ' + authToken,
      }
    })
    return await response.data;
  }
  catch (error) {
    console.log(error, 'error----');
  }
}

function* basicDetailsUpdateSaga() {
  yield takeLatest(BASIC_DETAILS_UPDATE, updateBasicDetailsSaga);
}

export default basicDetailsUpdateSaga;

