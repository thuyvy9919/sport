import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from "../constants/userConstants";
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
        
        localStorage.setItem('userLogin', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: "Loi",
        });
    }
};
