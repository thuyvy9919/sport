import {
    FEATURED_PRODUCTS_REQUEST,
    FEATURED_PRODUCTS_SUCCESS,
    FEATURED_PRODUCTS_FAIL,
    LATEST_PRODUCTS_REQUEST,
    LATEST_PRODUCTS_SUCCESS,
    LATEST_PRODUCTS_FAIL,
    DETAILS_PRODUCT_REQUEST,
    DETAILS_PRODUCT_SUCCESS,
    DETAILS_PRODUCT_FAIL,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,

} from "../constants/productConstants.js";

import axios from "axios";

const url = "https://toryo-sport.herokuapp.com"
const urlLocal = "http://localhost:4000"

export const getFeaturedProducts = () => async (dispatch) => {
    try {
        dispatch({ type: FEATURED_PRODUCTS_REQUEST });
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        const {data} = await axios.get(urlLocal + '/api/products/featured')

        dispatch({ 
            type: FEATURED_PRODUCTS_SUCCESS,
            payload: data.featuredProducts
        })
    } catch (error) {
        dispatch({ 
            type: FEATURED_PRODUCTS_FAIL,
            payload: "Loi"
        })
    }
};

export const getLatestProducts = () => async (dispatch) => {
    try {
        dispatch({ type: LATEST_PRODUCTS_REQUEST });
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        const {data} = await axios.get(urlLocal + '/api/products/latest')

        dispatch({ 
            type: LATEST_PRODUCTS_SUCCESS,
            payload: data.latestProducts
        })
    } catch (error) {
        dispatch({ 
            type: LATEST_PRODUCTS_FAIL,
            payload: "Loi"
        })
    }
};

export const getDetailsProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DETAILS_PRODUCT_REQUEST });
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        const {data} = await axios.get(urlLocal + `/api/product/${id}`)

        dispatch({ 
            type: DETAILS_PRODUCT_SUCCESS,
            payload: data.product
        })
    } catch (error) {
        dispatch({ 
            type: DETAILS_PRODUCT_FAIL,
            payload: "Loi"
        })
    }
};

export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });

        const {data} = await axios.get(urlLocal + '/api/admin/products')

        dispatch({ 
            type: ALL_PRODUCTS_SUCCESS,
            payload: data.products
        })
    } catch (error) {
        dispatch({ 
            type: ALL_PRODUCTS_FAIL,
            payload: "Loi"
        })
    }
};