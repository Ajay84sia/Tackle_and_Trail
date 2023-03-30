import axios from "axios"
import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, PRODUCT_FAIL } from "./actionType"


export const getProducts=(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQUEST})
    axios.get(`https://tackle-and-trail.onrender.com/boating`)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS , payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_FAIL})
    })
}