import { combineReducers } from "redux";
import { authReducers } from "./reducers/authReducers";
import { profileCreateReducers } from "./reducers/profileCreateReducers";

export default combineReducers({
    authReducers,
    profileCreateReducers,
})