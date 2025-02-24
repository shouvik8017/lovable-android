import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { REGISTER_USER } from '../constants';
import {
  registerUserSuccess,
  registerUserFailure,
  showSuccessPopUp,
  showErrorPopUp,
} from '../actions';
import { BASEURL, UserRegistration } from '../../constants/ApiUrls';
import { Alert } from 'react-native';

function* registerUserSaga(action) {
  try {
    // Simulate API call
    const user = yield call(registerUserApi, action.payload);
    console.log('-5-5-5-5-5-', user);
    if(user.status){
      yield put(registerUserSuccess(user));
    }
    else {
      Alert.alert(user.message);
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    yield put(registerUserFailure(error.message));
  }
}

const registerUserApi = async (userData) => {
  // Simulate API call
  const url = BASEURL + UserRegistration;
  try {
    const response = await axios.post(url, userData)
    return await response.data;
  }
  catch (error) {
    console.log(error, 'error----');
  }
}

function* registrationSaga() {
  yield takeLatest(REGISTER_USER, registerUserSaga);
}

export default registrationSaga;

