import {combineReducers} from "redux";
import auth from "./auth.js";
import message from "./message.js";
import getUser from "./getUser.js";

export default combineReducers({
    auth,
    message,
    getUser,
});