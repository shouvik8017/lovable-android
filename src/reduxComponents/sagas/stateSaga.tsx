import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_STATE } from '../constants';
import {
  showErrorPopUp,
  otpVerifySuccess,
  otpVerifyFailure,
  getStateSuccess,
  getStateFailure,
} from '../actions';
import { BASEURL, GetStates } from '../../constants/ApiUrls';

function* getStateSaga() {
  try {
    // Simulate API call
    const stateList = yield call(getStateApi);
    console.log('-9-9-9-99-9-9', stateList);
    
    if (stateList.status) {
      yield put(getStateSuccess(stateList.data));
    }
    else {
      yield put(showErrorPopUp(stateList.message));
    }

  } catch (error) {
    yield put(getStateFailure(error.message));
  }
}

const getStateApi = async () => {
  // Simulate API call
  const url = BASEURL + GetStates;
  try {
    const response = await axios.get(url)
    return await response.data;
  }
  catch (error) {
    console.log(error, 'error----');
  }
}

function* stateSaga() {
  yield takeLatest(GET_STATE, getStateSaga);
}

export default stateSaga;

