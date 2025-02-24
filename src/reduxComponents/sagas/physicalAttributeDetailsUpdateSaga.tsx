import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { PHYSICAL_ATTRIBUTE_DETAILS_UPDATE } from '../constants';
import {
  showErrorPopUp,
  physicalAttributeUpdateSuccess,
  physicalAttributeUpdateFailure,
} from '../actions';
import { BASEURL, PhysicalAttributeDetailsUpdate } from '../../constants/ApiUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* physicalAttributeDetailsUpdate(action) {
  try {
    // Simulate API call
    const user = yield call(physicalAttributeDetailsUpdateApi, action.payload);
    console.log('0-0-0-0-0-0-0-0-0-0-0-0', user);
    
    if (user.status) {
      yield put(physicalAttributeUpdateSuccess(user));
    }
    else {
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    yield put(physicalAttributeUpdateFailure(error.message));
  }
}

const physicalAttributeDetailsUpdateApi = async (userData) => {
  // Simulate API call
  const url = BASEURL + PhysicalAttributeDetailsUpdate;
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

function* physicalAttributeDetailsUpdateSaga() {
  yield takeLatest(PHYSICAL_ATTRIBUTE_DETAILS_UPDATE, physicalAttributeDetailsUpdate);
}

export default physicalAttributeDetailsUpdateSaga;

