import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ADDRESS_UPDATE, ASTROLOGY_DETAILS_UPDATE, LIFESTYLE_UPDATE } from '../constants';
import {
  astrologyDetailsUpdateSuccess,
  astrologyDetailsUpdateFailure,
  showErrorPopUp,
} from '../actions';
import { AddressDetailsUpdate, AstrologyDetailsUpdate, BASEURL } from '../../constants/ApiUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* astrologyDetailsUpdate(action) {
  try {
    // Simulate API call
    const user = yield call(astrologyDetailsUpdateApi, action.payload);
    console.log('0-0-0-0-0-0-0-0-0-0-0-0', user);
    
    if (user.status) {
      yield put(astrologyDetailsUpdateSuccess(user));
    }
    else {
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    yield put(astrologyDetailsUpdateFailure(error.message));
  }
}

const astrologyDetailsUpdateApi = async (userData) => {
  // Simulate API call
  const url = BASEURL + AstrologyDetailsUpdate;
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

function* astrologyDetailsUpdateSaga() {
  yield takeLatest(ASTROLOGY_DETAILS_UPDATE, astrologyDetailsUpdate);
}

export default astrologyDetailsUpdateSaga;

