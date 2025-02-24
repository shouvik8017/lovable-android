import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
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
} from "../constants";

const initialState = {
  profileData: null,
  errorMessage: null,
  successMessage: null,
  stateList: null,
  cityList: null,
  loading: false,
  error: null,
  addressData: null,
  lifeStyleData: null,
  astrologyDetailsData: null,
  socialBackgroundDetailsData: null,
  physicalAttributeDetailsData: null,
};

export const profileCreateReducers = (state = initialState, action) => {
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
    case GET_STATE:
      return {
        ...state,
        error: null,
        loading: true
      };
    case GET_STATE_SUCCESS:
      return {
        ...state,
        stateList: action.payload,
        loading: false
      };
    case GET_STATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case GET_CITY:
      return {
        ...state,
        error: null,
        loading: false
      };
    case GET_CITY_SUCCESS:
      return {
        ...state,
        cityList: action.payload,
        loading: false
      };
    case GET_CITY_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case BASIC_DETAILS_UPDATE_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
        loading: false
      };
    case BASIC_DETAILS_UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case BASIC_DETAILS_UPDATE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ADDRESS_UPDATE_SUCCESS:
      return {
        ...state,
        addressData: action.payload,
        loading: false
      };
    case ADDRESS_UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ADDRESS_UPDATE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LIFESTYLE_UPDATE_SUCCESS:
      return {
        ...state,
        lifeStyleData: action.payload,
        loading: false
      };
    case LIFESTYLE_UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case LIFESTYLE_UPDATE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ASTROLOGY_DETAILS_UPDATE_SUCCESS:
      return {
        ...state,
        astrologyDetailsData: action.payload,
        loading: false
      };
    case ASTROLOGY_DETAILS_UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ASTROLOGY_DETAILS_UPDATE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SOCIAL_BACKGROUND_DETAILS_UPDATE_SUCCESS:
      return {
        ...state,
        socialBackgroundDetailsData: action.payload,
        loading: false
      };
    case SOCIAL_BACKGROUND_DETAILS_UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SOCIAL_BACKGROUND_DETAILS_UPDATE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case PHYSICAL_ATTRIBUTE_DETAILS_UPDATE_SUCCESS:
      return {
        ...state,
        physicalAttributeDetailsData: action.payload,
        loading: false
      };
    case PHYSICAL_ATTRIBUTE_DETAILS_UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case PHYSICAL_ATTRIBUTE_DETAILS_UPDATE:
      return {
        ...state,
        loading: true,
        error: null
      };
    default:
      return state
  }
}