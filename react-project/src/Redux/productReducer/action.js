import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS, SET_PAGE } from "./actionTypes"

export const getproducts=(endpoint,paramObj,page)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    return axios.get(`https://tackle-and-trail.onrender.com/${endpoint}?_page=${page}&_limit=6`,paramObj).then((res)=>{
        dispatch({type:SET_PAGE,payload:+res.headers.get("x-total-count")})
        dispatch({type:PRODUCT_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })

}