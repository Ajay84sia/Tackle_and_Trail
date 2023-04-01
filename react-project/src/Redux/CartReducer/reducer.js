import { CART_DELETE_REQUEST, CART_FAILURE, CART_GET_SUCCESS, CART_PATCH_REQUEST, CART_POST_SUCCESS, CART_REQUEST } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    cart: [],
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CART_REQUEST:
            return { ...state, isLoading: true }
        case CART_GET_SUCCESS:
            return { ...state, isLoading: false ,  cart: [...payload] }
        case CART_POST_SUCCESS:
            return { ...state, isLoading: false }
        case CART_DELETE_REQUEST:
            return { ...state, isLoading: false }
        case CART_PATCH_REQUEST:
            return { ...state, isLoading: false }
        case CART_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }

}