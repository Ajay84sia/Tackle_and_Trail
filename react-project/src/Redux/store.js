import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as adminReducer } from './AdminReducer/reducer'
import { reducer as productReducer } from './productReducer/reducer'
const rootReducer = combineReducers({
    adminReducer,
    productReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))