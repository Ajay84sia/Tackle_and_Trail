import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "thunk";
import { reducer as productReducer } from './productReducer/reducer'
const rootReducer = combineReducers({
    productReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))