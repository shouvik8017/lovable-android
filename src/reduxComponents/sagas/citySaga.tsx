import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_CITY, OTP_VERIFY } from '../constants';
import {
  showErrorPopUp,
  getCitySuccess,
  getCityFailure,
} from '../actions';
import { BASEURL, Getcities } from '../../constants/ApiUrls';

function* getCitySaga(action) {
  try {
    // Simulate API call
    const cityList = yield call(getCityApi, action.payload);
    if (cityList.status) {
      yield put(getCitySuccess(cityList.data));
    }
    else {
      yield put(showErrorPopUp(cityList.message));
    }

  } catch (error) {
    yield put(getCityFailure(error.message));
  }
}

const getCityApi = async (state_id) => {
  // Simulate API call
  const url = BASEURL + Getcities + '?state_id=' + state_id;
  try {
    const response = await axios.get(url)
    return await response.data;
  }
  catch (error) {
    console.log(error, 'error----');
  }
}

function* citySaga() {
  yield takeLatest(GET_CITY, getCitySaga);
}

export default citySaga;

