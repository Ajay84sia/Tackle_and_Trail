import axios from "axios"
import { ADMIN_DELETE_REQUEST, ADMIN_FAILURE_REQUEST, ADMIN_GET_REQUEST, ADMIN_POST_REQUEST, ADMIN_REQUEST } from "./actionTypes"








// export const ADMIN_REQUEST = "ADMIN_REQUEST";
// export const ADMIN_GET_REQUEST = "ADMIN_GET_REQUEST";
// export const ADMIN_FAILURE_REQUEST = "ADMIN_FAILURE_REQUEST";

// export const ADMIN_POST_REQUEST = "ADMIN_POST_REQUEST";
// export const ADMIN_PATCH_REQUEST = "ADMIN_PATCH_REQUEST";
// export const ADMIN_DELETE_REQUEST = "ADMIN_DELETE_REQUEST";

// GET Request

export const adminGetReq = (endpoint, paramObj) => (dispatch) => {
    dispatch({ type: ADMIN_REQUEST })

    axios.get(`https://tackle-and-trail.onrender.com/${endpoint}`, paramObj).then((res) => {
        dispatch({ type: ADMIN_GET_REQUEST, payload: res.data })
    }).catch(() => {
        dispatch({ type: ADMIN_FAILURE_REQUEST })
    })
}

// POST Request

export const adminPostReq = (endpoint, Obj) => (dispatch) => {
    dispatch({ type: ADMIN_REQUEST })

    axios.post(`https://tackle-and-trail.onrender.com/${endpoint}`, Obj).then((res) => {
        dispatch({ type: ADMIN_POST_REQUEST })
    }).catch(() => {
        dispatch({ type: ADMIN_FAILURE_REQUEST })
    })
}

// PATCH Request

//Delete Request

export const adminDelReq = (endpoint, id) => (dispatch) => {
    dispatch({ type: ADMIN_REQUEST })

    return axios.delete(`https://tackle-and-trail.onrender.com/${endpoint}/${id}`).then((res) => {
        dispatch({ type: ADMIN_DELETE_REQUEST })
    }).catch(() => {
        dispatch({ type: ADMIN_FAILURE_REQUEST })
    })
}
