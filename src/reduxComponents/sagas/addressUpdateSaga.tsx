import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ADDRESS_UPDATE } from '../constants';
import {
  addressUpdateFailure,
  addressUpdateSuccess,
  showErrorPopUp,
} from '../actions';
import { AddressDetailsUpdate, BASEURL, LifestyleDetailsUpdate } from '../../constants/ApiUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* addressUpdate(action) {
  try {
    // Simulate API call
    const user = yield call(addressUpdateApi, action.payload);
    console.log('0-0-0-0-0-0-0-0-0-0-0-0', user);
    
    if (user.status) {
      yield put(addressUpdateSuccess(user));
    }
    else {
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    yield put(addressUpdateFailure(error.message));
  }
}

const addressUpdateApi = async (userData) => {
  // Simulate API call
  const url = BASEURL + LifestyleDetailsUpdate;
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

function* addressUpdateSaga() {
  yield takeLatest(ADDRESS_UPDATE, addressUpdate);
}

export default addressUpdateSaga;

