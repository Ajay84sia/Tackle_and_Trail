import axios from "axios"
import { CART_DELETE_REQUEST, CART_FAILURE, CART_GET_SUCCESS, CART_PATCH_REQUEST, CART_POST_SUCCESS, CART_REQUEST } from "./actionTypes"


export const cartPostReq = (Obj) => (dispatch) => {
    dispatch({ type: CART_REQUEST })

    return axios.post(`https://tackle-and-trail.onrender.com/cart`, Obj).then((res) => {
        dispatch({ type: CART_POST_SUCCESS })
    }).catch(() => {
        dispatch({ type: CART_FAILURE })
    })
}

export const cartGetReq = (endpoint, paramObj) => (dispatch) => {
    dispatch({ type: CART_REQUEST })

    axios.get(`https://tackle-and-trail.onrender.com/cart`).then((res) => {
        dispatch({ type: CART_GET_SUCCESS, payload: res.data })
    }).catch(() => {
        dispatch({ type: CART_FAILURE })
    })
}

export const cartPatchReq = (id, quantity) => (dispatch) => {
    dispatch({ type: CART_REQUEST })

    const Obj = {
        quantity,
    }

    return axios.patch(`https://tackle-and-trail.onrender.com/cart/${id}`, Obj).then((res) => {
        dispatch({ type: CART_PATCH_REQUEST })
    }).catch(() => {
        dispatch({ type: CART_FAILURE })
    })
}

export const cartDelReq = (id) => (dispatch) => {
    dispatch({ type: CART_REQUEST })

    return axios.delete(`https://tackle-and-trail.onrender.com/cart/${id}`).then((res) => {
        dispatch({ type: CART_DELETE_REQUEST })
    }).catch(() => {
        dispatch({ type: CART_FAILURE })
    })
}

