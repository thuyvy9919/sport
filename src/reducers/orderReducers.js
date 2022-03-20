import { NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, NEW_ORDER_FAIL } from '../constants/orderConstants'

export const newOrderReducer = (state = { order: {} }, action) => {
    switch (action.type) {

        case NEW_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        case NEW_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}