import {
    ADD_TO_CART,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload
            const isItemExist = state.cartItems ? state.cartItems.find(i => i.product_id === item.product_id) : null
            if (isItemExist) {
                state.cartItems.map(i => {
                    if (i.product_id === isItemExist.product_id) {
                        i.qty = i.qty + item.qty
                    }
                })
                return {
                    loading: false,
                    ...state,
                    cartItems: state.cartItems
                }
            }
            else {
                if (state.cartItems) {
                    return {
                        ...state,
                        loading: false,
                        cartItems: [...state.cartItems, item]
                    }
                } else {
                    return {
                        ...state,
                        cartItems: [item]
                    }
                }
            }


        default: return state
    }
}