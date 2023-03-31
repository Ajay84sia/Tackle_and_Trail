import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS, SET_PAGE } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    totalPage:1
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQUEST:
            return{...state,isLoading:true}
            case PRODUCT_SUCCESS:
                return {...state,isLoading:false,products:payload}
                case PRODUCT_FAILURE:
                    return{...state,isLoading:false,isError:true}
                   case SET_PAGE:
                    return{...state,totalPage:payload}

        default:
            return state;
    }
}