import {applyMiddleware, legacy_createStore ,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {productReducer} from '../Redux/Products/Reducer'
import {CartReducer} from '../Redux/Cart/Reducer'

const rootReducer = combineReducers({product:productReducer,cart:CartReducer})
const store = legacy_createStore(rootReducer , applyMiddleware(thunk))


export {store}