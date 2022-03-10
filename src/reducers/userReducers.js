import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from "../constants/userConstants";

export const authReducer = (state = { userLogin: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                userLogin: action.payload
            }
        case LOGIN_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                userLogin: null
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}