import { API_URL } from "../config/constant";
import axios from "axios";

// 액션타입, 액션 생성함수, 초기값, 리듀서
const GET_GOODS = "GET_GOODS";
const GET_GOODS_SUCCESS = "GET_GOODS_SUCCESS";
const GET_GOODS_ERROR = "GET_GOODS_ERROR";

const initialState = {
    data: null,
    loading: false,
    error: null
}

// 액션 생성함수
// thunk 함수 사용
export const getGoods = () => async dispatch => {
    dispatch({ type: GET_GOODS }) // 요청시작
    try {
        const response = await axios.get(`${API_URL}/usedtrade`)
        const goodsdata = response.data;
        dispatch({ type: GET_GOODS_SUCCESS, payload: goodsdata })
    }
    catch(e) {
        dispatch({ type: GET_GOODS_ERROR, payload: e})
    }
}

export default function goods(state=initialState, action) {
    switch(action.type) {
        case GET_GOODS:
            return {
                loading: true,
                data: null,
                error: null
            }
        case GET_GOODS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null 
            }
        case GET_GOODS_ERROR:
            return {
                loading: false,
                data: null,
                error: action.payload
            }
        default:
            return state
    }
}