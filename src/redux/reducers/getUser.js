import {GET_USER_DATA} from "../actions/types.js";

const initialState = {
    firstName: "",
    lastName: "",
};

const getUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DATA:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
        default:
            return state;
    }
}

export default getUserReducer;