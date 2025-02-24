import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ADDRESS_UPDATE, LIFESTYLE_UPDATE } from '../constants';
import {
  lifeStyleUpdateSuccess,
  lifeStyleUpdateFailure,
  showErrorPopUp,
} from '../actions';
import { BASEURL, LifestyleDetailsUpdate } from '../../constants/ApiUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* lifeStyleUpdate(action) {
  try {
    // Simulate API call
    const user = yield call(lifeStyleUpdateApi, action.payload);
    console.log('0-0-0-0-0-0-0-0-0-0-0-0', user);
    
    if (user.status) {
      yield put(lifeStyleUpdateSuccess(user));
    }
    else {
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    yield put(lifeStyleUpdateFailure(error.message));
  }
}

const lifeStyleUpdateApi = async (userData) => {
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

function* lifeStyleUpdateSaga() {
  yield takeLatest(LIFESTYLE_UPDATE, lifeStyleUpdate);
}

export default lifeStyleUpdateSaga;

