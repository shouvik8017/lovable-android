import {
    REGISTER_USER, 
    REGISTER_USER_FAILURE, 
    REGISTER_USER_SUCCESS,
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    OTP_VERIFY,
    OTP_VERIFY_SUCCESS,
    OTP_VERIFY_FAILURE,
    IS_LOGIN,
    BASIC_DETAILS_UPDATE,
    BASIC_DETAILS_UPDATE_SUCCESS,
    BASIC_DETAILS_UPDATE_FAILURE,
    GET_STATE,
    GET_CITY,
    GET_STATE_SUCCESS,
    GET_STATE_FAILURE,
    GET_CITY_SUCCESS,
    GET_CITY_FAILURE,
    ADDRESS_UPDATE_SUCCESS,
    ADDRESS_UPDATE_FAILURE,
    ADDRESS_UPDATE,
    LIFESTYLE_UPDATE_SUCCESS,
    LIFESTYLE_UPDATE_FAILURE,
    LIFESTYLE_UPDATE,
    ASTROLOGY_DETAILS_UPDATE_SUCCESS,
    ASTROLOGY_DETAILS_UPDATE_FAILURE,
    ASTROLOGY_DETAILS_UPDATE,
    SOCIAL_BACKGROUND_DETAILS_UPDATE_SUCCESS,
    SOCIAL_BACKGROUND_DETAILS_UPDATE_FAILURE,
    SOCIAL_BACKGROUND_DETAILS_UPDATE,
    PHYSICAL_ATTRIBUTE_DETAILS_UPDATE_SUCCESS,
    PHYSICAL_ATTRIBUTE_DETAILS_UPDATE_FAILURE,
    PHYSICAL_ATTRIBUTE_DETAILS_UPDATE,
    SEND_PASSWORD_RESET_CODE,
    SEND_PASSWORD_RESET_CODE_SUCCESS,
    SEND_PASSWORD_RESET_CODE_FAILURE,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
} from './constants';

export const showErrorPopUp = (message) => ({
  type: ERROR_MESSAGE,
  payload: message,
})

export const showSuccessPopUp = (message) => ({
  type: SUCCESS_MESSAGE,
  payload: message,
})

export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: userData,
});

export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});

export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const loginUser = (userData) => ({
  type: LOGIN_USER,
  payload: userData,
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const otpVerify = (data) => ({
  type: OTP_VERIFY,
  payload: data,
});

export const otpVerifySuccess = (user) => ({
  type: OTP_VERIFY_SUCCESS,
  payload: user,
});

export const otpVerifyFailure = (error) => ({
  type: OTP_VERIFY_FAILURE,
  payload: error,
});

export const isLoginSet = (data) => ({
  type: IS_LOGIN,
  payload: data,
});

export const basicDetailsUpdateSuccess = (user) => ({
  type: BASIC_DETAILS_UPDATE_SUCCESS,
  payload: user,
});

export const basicDetailsUpdateFailure = (error) => ({
  type: BASIC_DETAILS_UPDATE_FAILURE,
  payload: error,
});

export const basicDetailsUpdate = (data) => ({
  type: BASIC_DETAILS_UPDATE,
  payload: data,
})

export const getState = () => ({
  type: GET_STATE,
})

export const getStateSuccess = (data) => ({
  type: GET_STATE_SUCCESS,
  payload: data,
})

export const getStateFailure = (error) => ({
  type: GET_STATE_FAILURE,
  payload: error,
})

export const getCity = (data) => ({
  type: GET_CITY,
  payload: data,
})

export const getCitySuccess = (data) => ({
  type: GET_CITY_SUCCESS,
  payload: data,
})

export const getCityFailure = (error) => ({
  type: GET_CITY_FAILURE,
  payload: error,
})

export const addressUpdateSuccess = (user) => ({
  type: ADDRESS_UPDATE_SUCCESS,
  payload: user,
});

export const addressUpdateFailure = (error) => ({
  type: ADDRESS_UPDATE_FAILURE,
  payload: error,
});

export const addressUpdate = (data) => ({
  type: ADDRESS_UPDATE,
  payload: data,
})

export const lifeStyleUpdateSuccess = (user) => ({
  type: LIFESTYLE_UPDATE_SUCCESS,
  payload: user,
});

export const lifeStyleUpdateFailure = (error) => ({
  type: LIFESTYLE_UPDATE_FAILURE,
  payload: error,
});

export const lifeStyleUpdate = (data) => ({
  type: LIFESTYLE_UPDATE,
  payload: data,
})

export const astrologyDetailsUpdateSuccess = (user) => ({
  type: ASTROLOGY_DETAILS_UPDATE_SUCCESS,
  payload: user,
});

export const astrologyDetailsUpdateFailure = (error) => ({
  type: ASTROLOGY_DETAILS_UPDATE_FAILURE,
  payload: error,
});

export const astrologyDetailsUpdate = (data) => ({
  type: ASTROLOGY_DETAILS_UPDATE,
  payload: data,
})

export const socialBackgroundUpdateSuccess = (user) => ({
  type: SOCIAL_BACKGROUND_DETAILS_UPDATE_SUCCESS,
  payload: user,
});

export const socialBackgroundUpdateFailure = (error) => ({
  type: SOCIAL_BACKGROUND_DETAILS_UPDATE_FAILURE,
  payload: error,
});

export const socialBackgroundUpdate = (data) => ({
  type: SOCIAL_BACKGROUND_DETAILS_UPDATE,
  payload: data,
})

export const physicalAttributeUpdateSuccess = (user) => ({
  type: PHYSICAL_ATTRIBUTE_DETAILS_UPDATE_SUCCESS,
  payload: user,
});

export const physicalAttributeUpdateFailure = (error) => ({
  type: PHYSICAL_ATTRIBUTE_DETAILS_UPDATE_FAILURE,
  payload: error,
});

export const physicalAttributeUpdate = (data) => ({
  type: PHYSICAL_ATTRIBUTE_DETAILS_UPDATE,
  payload: data,
})

export const sendPasswordResetCode = (data) => ({
  type: SEND_PASSWORD_RESET_CODE,
  payload: data,
})

export const sendPasswordResetCodeSuccess = (data) => ({
  type: SEND_PASSWORD_RESET_CODE_SUCCESS,
  payload: data,
})

export const sendPasswordResetCodeFailure = (error) => ({
  type: SEND_PASSWORD_RESET_CODE_FAILURE,
  payload: error,
})

export const resetPassword = (data) => ({
  type: RESET_PASSWORD,
  payload: data,
})

export const resetPasswordSuccess = (data) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: data,
})

export const resetPasswordFailure = (error) => ({
  type: RESET_PASSWORD_FAILURE,
  payload: error,
})
