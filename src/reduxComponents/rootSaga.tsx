import { all } from 'redux-saga/effects';
import registrationSaga from './sagas/registrationSaga';
import loginSaga from './sagas/loginSaga';
import otpVerificationSaga from './sagas/otpVerificationSaga';
import basicDetailsUpdateSaga from './sagas/basicDetailsUpdateSaga';
import stateSaga from './sagas/stateSaga';
import citySaga from './sagas/citySaga';
import addressUpdateSaga from './sagas/addressUpdateSaga';
import astrologyDetailsUpdateSaga from './sagas/astrologyDetailsUpdateSaga';
import lifeStyleUpdateSaga from './sagas/lifeStyleUpdateSaga';
import socialBackgroundDetailsUpdateSaga from './sagas/socialBackgroundDetailsUpdateSaga';
import sendPasswordResetCodeSaga from './sagas/sendPasswordResetCodeSaga';
import resetPasswordSaga from './sagas/resetPasswordSaga';

function* rootSaga() {
  yield all([
    registrationSaga(),
    loginSaga(),
    otpVerificationSaga(),
    basicDetailsUpdateSaga(),
    stateSaga(),
    citySaga(),
    addressUpdateSaga(),
    astrologyDetailsUpdateSaga(),
    lifeStyleUpdateSaga(),
    socialBackgroundDetailsUpdateSaga(),
    sendPasswordResetCodeSaga(),
    resetPasswordSaga(),
  ]);
}

export default rootSaga;