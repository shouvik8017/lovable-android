import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_USER } from '../constants';
import {
  loginUserSuccess,
  loginUserFailure,
  showErrorPopUp,
} from '../actions';
import { BASEURL, Login } from '../../constants/ApiUrls';
import { Alert } from 'react-native';

function* loginUserSaga(action) {
  try {
    // Simulate API call
    const user = yield call(loginUserApi, action.payload);
    if(user.status){
      yield put(loginUserSuccess(user));
    }
    else {
      Alert.alert(user.message);
      yield put(showErrorPopUp(user.message));
    }
  } catch (error) {
    yield put(loginUserFailure(error.message));
  }
}

const loginUserApi = async (userData) => {
  // Simulate API call
  const url = BASEURL + Login;
  try {
    const response = await axios.post(url, userData)
    return await response.data;
  }
  catch (error) {
    console.log(error, 'error----');
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
}

export default loginSaga;

