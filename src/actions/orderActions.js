import { NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, NEW_ORDER_FAIL } from '../constants/orderConstants'
import axios from "axios";
const url = "https://toryo-sport.herokuapp.com";
const urlLocal = "http://localhost:4000"


export const newOrder = (order) => async (dispatch) => {
    try {
        dispatch({ type: NEW_ORDER_REQUEST });

        const userLogin = JSON.parse(localStorage.getItem('userLogin'))

        const config = {
            headers: {
                'Content-Type': 'application/json',
               
            }
        }
        console.log(userLogin.token);

        const { data } = await axios.post(urlLocal + `/api/order/new`, order, config);

        dispatch({
            type: NEW_ORDER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_ORDER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
};