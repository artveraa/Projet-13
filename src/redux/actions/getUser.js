import {GET_USER_DATA} from "./types.js";

import {getUserBoard} from "../services/user.service.js";


export const getUserData = (token) => (dispatch) => {
    return getUserBoard(token).then(
        (response) => {
            dispatch({
                type: GET_USER_DATA,
                payload: {
                    firstName: response.firstName,
                    lastName: response.lastName
                },
            });

            return Promise.resolve()
        });
};