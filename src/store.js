import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    featuredProductsReducer,
    latestProductsReducer,
    detailsProductReducer,
    allProductsReducer

} from './reducers/productReducers'

import {authReducer} from './reducers/userReducers'



const reducer = combineReducers({
    featuredProductsReducer,
    latestProductsReducer,
    detailsProductReducer,
    allProductsReducer,

    authReducer
})

//lấy user login tử localstorage 
const userLoginFromStorage = localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : null

//khởi tạo giá trị, kiểm tra đã có user đăng nhập hay chưa
const initialState = {
    authReducer: {
        isAuthenticated: userLoginFromStorage ? true : false,
        userLogin: userLoginFromStorage ? userLoginFromStorage.user : null

    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store