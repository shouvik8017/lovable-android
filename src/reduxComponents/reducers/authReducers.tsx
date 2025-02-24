import {
  ADD_TO_CART,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  OTP_VERIFY,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_FAILURE,
  IS_LOGIN,
  SEND_PASSWORD_RESET_CODE,
  SEND_PASSWORD_RESET_CODE_FAILURE,
  SEND_PASSWORD_RESET_CODE_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../constants";

const initialState = {
  count: 0,
  userData: null,
  loginUserData: null,
  otpData: null,
  loading: false,
  error: null,
  isLogin: false,
  errorMessage: null,
  successMessage: null,
  passwordResetCode: null,
  resetPasswordData: null,
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      }
    case SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload,
        loading: false
      }
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
        error: null
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loading: false
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginUserData: action.payload,
        loading: false
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case OTP_VERIFY:
      return {
        ...state,
        loading: true,
        error: null
      };
    case OTP_VERIFY_SUCCESS:
      return {
        ...state,
        otpData: action.payload,
        loading: false
      };
    case OTP_VERIFY_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
        loading: false
      };
    case SEND_PASSWORD_RESET_CODE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SEND_PASSWORD_RESET_CODE_SUCCESS:
      return {
        ...state,
        passwordResetCode: action.payload,
        loading: false
      };
    case SEND_PASSWORD_RESET_CODE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
      case RESET_PASSWORD:
      return {
        ...state,
        loading: true,
        error: null
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordData: action.payload,
        loading: false
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state
  }
}