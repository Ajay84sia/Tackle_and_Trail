import { ADD_TO_CART } from "./actionTypes"

const initstate = {
    orders: [],
 }

 export const reducer = (state=initstate, {type, payload}) => {
    switch(type){
          case ADD_TO_CART : return { orders:[...state.orders , payload]} //[data1,data2]
         //  case ADD_TO_CART : return {...state,payload}  //[]

        default: return state
    }
 }