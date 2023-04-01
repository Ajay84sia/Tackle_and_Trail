import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as adminReducer } from './AdminReducer/reducer'
import { reducer as productReducer } from './productReducer/reducer'
import { reducer as orderReducer } from "./OrderReducer/reducer";
import {reducer as cartReducer} from "./CartReducer/reducer"
   

const rootReducer = combineReducers({
    adminReducer,
    productReducer,
    cartReducer,
    orderReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))