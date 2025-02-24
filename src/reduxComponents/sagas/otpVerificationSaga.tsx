import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { OTP_VERIFY } from '../constants';
import {
  showErrorPopUp,
  otpVerifySuccess,
  otpVerifyFailure,
} from '../actions';
import { BASEURL, OtpVerify } from '../../constants/ApiUrls';
import { Alert } from 'react-native';

function* otpSaga(action) {
  try {
    // Simulate API call
    const user = yield call(otpVerificationApi, action.payload);
    console.log('8-8-8-8-8-8-8-8-8-8---->', user);
    
    if(user.status){
      yield put(otpVerifySuccess(user));
    }
    else {
      Alert.alert(user.message);
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    yield put(otpVerifyFailure(error.message));
  }
}

const otpVerificationApi = async (userData) => {
  // Simulate API call
  const url = BASEURL + OtpVerify;
  try {
    const response = await axios.post(url, userData)
    return await response.data;
  }
  catch (error) {
    console.log(error, 'error----');
  }
}

function* otpVerificationSaga() {
  yield takeLatest(OTP_VERIFY, otpSaga);
}

export default otpVerificationSaga;

