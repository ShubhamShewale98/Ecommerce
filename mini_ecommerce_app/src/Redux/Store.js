import {applyMiddleware, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import {productReducer} from '../Redux/Products/Reducer'
const store = legacy_createStore(productReducer , applyMiddleware(thunk))


export {store}