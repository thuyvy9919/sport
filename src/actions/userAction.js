import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from "../constants/userConstants";
import { CART_IMPORT } from '../constants/cartConstants'

import axios from "axios";
const url = "https://toryo-sport.herokuapp.com";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = {

            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            url + "/api/login",
            { email, password },
            config
        );

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user,
        });
        //Khi đăng nhập thành công, lấy giỏ hàng của id user đó từ localstorage về để bỏ qua bên reducer
        dispatch({
            type: CART_IMPORT,
            payload: JSON.parse(localStorage.getItem(data.user._id)),
        });

        //Gửi data (khi đăng nhập thành công api trả về thông tin của tài khoản đó) lên localstorage để lưu trữ lâu dài - sử dụng cho nhiều component 
        localStorage.setItem('userLogin', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: "Loi",
        });
    }
};

export const logout = () => async (dispatch) => {
    try {

        await axios.get( url +'/api/logout')

        dispatch({
            type: LOGOUT_SUCCESS,
        })
        localStorage.removeItem('userLogin')
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: "Loi",
        })
    }
}