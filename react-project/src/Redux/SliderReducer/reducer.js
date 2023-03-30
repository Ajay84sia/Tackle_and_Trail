import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, PRODUCT_FAIL } from "./actionType"

const initState = {
    isLoading:false,
    isError:false,
    products:[]
}

export const reducer = (state=initState , action)=>{
    switch(action.type){
        case GET_PRODUCT_REQUEST:
            return {...state , isLoading:true}
        case GET_PRODUCT_SUCCESS:
            return {...state , isLoading:false , products:action.payload}
        case PRODUCT_FAIL:
            return {...state , isLoading:false , isError:true}
        default:
            return state
    }
}