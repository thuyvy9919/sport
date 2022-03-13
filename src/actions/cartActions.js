import {
    ADD_TO_CART,
    REMOVE_CART,
    SAVE_SHIPPING_INFO
} from "../constants/cartConstants";


import axios from "axios";
const url = "https://toryo-sport.herokuapp.com";


export const addToCart = (user_id, id, qty) => async (dispatch, getState) => {

    const { data } = await axios.get(url + `/api/product/${id}`)
    console.log(data);
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product_id: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].url,
            qty
        }
    })

    localStorage.setItem(user_id, JSON.stringify(getState().cartReducer.cartItems))
}

export const removeCart = (user_id, id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_CART,
        payload: {
            id
        }
    })

    localStorage.setItem(user_id, JSON.stringify(getState().cartReducer.cartItems))
}

export const saveShippingInfo = (data) => async (dispatch) => {

    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data
    })

    localStorage.setItem('shippingInfo', JSON.stringify(data))

}