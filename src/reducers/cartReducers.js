import {
    ADD_TO_CART,
    REMOVE_CART,
    SAVE_SHIPPING_INFO
} from "../constants/cartConstants";
import { CART_IMPORT } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //lấy product từ payload
            const item = action.payload
            //Kiểm tra thử product được thêm vào giỏ hàng đã có trong giỏ hàng hay chưa
            const isItemExist = state.cartItems ? state.cartItems.find(i => i.product_id === item.product_id) : null

            if (isItemExist) {
                //Nếu có rồi thì cập nhật lại số lượng
                state.cartItems.map(i => {
                    if (i.product_id === isItemExist.product_id) {
                        i.qty = Number(i.qty) + Number(item.qty)
                    }
                })
                return {
                    loading: false,
                    ...state,
                    cartItems: state.cartItems
                }

            }
            else {
                // if (state.cartItems) {
                //     return {
                //         ...state,
                //         loading: false,
                //         cartItems: [...state.cartItems, item]
                //     }
                // } else {
                //     return {
                //         ...state,
                //         cartItems: [item]
                //     }
                // }

                //Nếu chưa có thì thêm vào giỏ hàng 
                return {
                    ...state,
                    loading: false,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_IMPORT:
            return {
                ...state,
                cartItems: action.payload,
            }
        case REMOVE_CART:
            let isItemRemove = state.cartItems.find(i => i.product_id === action.payload.id)
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i !== isItemRemove)
            }
        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }
        default: return state
    }
}