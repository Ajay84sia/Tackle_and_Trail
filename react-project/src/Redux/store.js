import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as adminReducer } from './AdminReducer/reducer'
import { reducer as productReducer } from './productReducer/reducer'
import { reducer as orderReducer } from "./OrderReducer/reducer";
   

const rootReducer = combineReducers({
    adminReducer,
    productReducer,
    orderReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))