import { ADD_TO_CART } from "./actionTypes";

const getCartItem = (payload)=> {
  return {type:ADD_TO_CART, payload}
}

export const addToCart =(payload)  =>(dispatch) => {
   dispatch(getCartItem(payload))
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.addToCart = addToCart;
}
