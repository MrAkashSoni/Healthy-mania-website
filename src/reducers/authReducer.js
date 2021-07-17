import {
    USER_DETAIL,
    USER_LOADING
} from "../constants/ActionTypes";

const INITIAL_STATE = {
    isLoading: false,
    userDetail: {}
}

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload
            };
        default:
    }
    return state;
}
