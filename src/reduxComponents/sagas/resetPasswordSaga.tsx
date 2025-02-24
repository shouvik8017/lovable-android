import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { RESET_PASSWORD } from '../constants';
import {
  showErrorPopUp,
  resetPasswordFailure,
  resetPasswordSuccess,
} from '../actions';
import { BASEURL, ResetPassword } from '../../constants/ApiUrls';
import { Alert } from 'react-native';

function* resetPassword(action) {
  try {
    // Simulate API call
    const user = yield call(resetPasswordApi, action.payload);
    console.log('-3-3-3-3-3-3-', user);
    
    if(user.status){
      yield put(resetPasswordSuccess(user));
    }
    else {
      Alert.alert(user.message);
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    console.log('02020202020', error);
    
    yield put(resetPasswordFailure(error.message));
  }
}

const resetPasswordApi = async (userData) => {
  // Simulate API call
  const url = BASEURL + ResetPassword;
  try {
    const response = await axios.post(url, userData)
    return await response.data;
  }
  catch (error) {
    console.log(error, 'error----');
  }
}

function* resetPasswordSaga() {
  yield takeLatest(RESET_PASSWORD, resetPassword);
}

export default resetPasswordSaga;

