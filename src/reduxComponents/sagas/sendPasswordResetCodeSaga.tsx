import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_USER, SEND_PASSWORD_RESET_CODE } from '../constants';
import {
  showErrorPopUp,
  sendPasswordResetCodeSuccess,
  sendPasswordResetCodeFailure,
} from '../actions';
import { BASEURL, SendPasswordResetCode } from '../../constants/ApiUrls';

function* sendPasswordResetCode(action) {
  try {
    // Simulate API call
    const user = yield call(sendPasswordResetCodeApi, action.payload);
    console.log('-1-1-1-1-1-11-', user);
    
    if(user.status){
      yield put(sendPasswordResetCodeSuccess(user));
    }
    else {
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    yield put(sendPasswordResetCodeFailure(error.message));
  }
}

const sendPasswordResetCodeApi = async (userData) => {
  // Simulate API call
  const url = BASEURL + SendPasswordResetCode;
  try {
    const response = await axios.post(url, userData)
    return await response.data;
  }
  catch (error) {
    console.log(error, 'error----');
  }
}

function* sendPasswordResetCodeSaga() {
  yield takeLatest(SEND_PASSWORD_RESET_CODE, sendPasswordResetCode);
}

export default sendPasswordResetCodeSaga;

