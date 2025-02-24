import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { SOCIAL_BACKGROUND_DETAILS_UPDATE } from '../constants';
import {
  showErrorPopUp,
  socialBackgroundUpdateSuccess,
  socialBackgroundUpdateFailure,
} from '../actions';
import { AstrologyDetailsUpdate, BASEURL, SocialBackgroundDetailsUpdate } from '../../constants/ApiUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* socialBackgroundDetailsUpdate(action) {
  try {
    // Simulate API call
    const user = yield call(socialBackgroundDetailsUpdateApi, action.payload);
    console.log('0-0-0-0-0-0-0-0-0-0-0-0', user);
    
    if (user.status) {
      yield put(socialBackgroundUpdateSuccess(user));
    }
    else {
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    yield put(socialBackgroundUpdateFailure(error.message));
  }
}

const socialBackgroundDetailsUpdateApi = async (userData) => {
  // Simulate API call
  const url = BASEURL + SocialBackgroundDetailsUpdate;
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

function* socialBackgroundDetailsUpdateSaga() {
  yield takeLatest(SOCIAL_BACKGROUND_DETAILS_UPDATE, socialBackgroundDetailsUpdate);
}

export default socialBackgroundDetailsUpdateSaga;

