import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    featuredProductsReducer,
    latestProductsReducer,
    detailsProductReducer,
    allProductsReducer

} from './reducers/productReducers'



const reducer = combineReducers({
    featuredProductsReducer,
    latestProductsReducer,
    detailsProductReducer,
    allProductsReducer
})
const initialState = {
    
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store