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
} from "../constants/productContants.js";

export const featuredProductsReducer = (state = {featuredProducts: []}, action) => {
    switch (action.type) {
        case FEATURED_PRODUCTS_REQUEST:
            return {
                loading: true,
            }
        case FEATURED_PRODUCTS_SUCCESS:
            return {
                loading: false,
                featuredProducts: action.payload
            }
        case FEATURED_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const latestProductsReducer = (state = {latestProducts: []}, action) => {
    switch (action.type) {
        case LATEST_PRODUCTS_REQUEST:
            return {
                loading: true,
            }
        case LATEST_PRODUCTS_SUCCESS:
            return {
                loading: false,
                latestProducts: action.payload
            }
        case LATEST_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const detailsProductReducer = (state = {product: {}}, action) => {
    switch (action.type) {
        case DETAILS_PRODUCT_REQUEST:
            return {
                loading: true,
            }
        case DETAILS_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case DETAILS_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const allProductsReducer = (state = {allProducts: []}, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                allProducts: action.payload
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}