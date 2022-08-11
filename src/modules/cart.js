import axios from 'axios'
import { API_URL } from '../config/constant'
import { getCookie } from '../util/cookie';

// 리덕스 액션타입, 초기값, 액션 생성함수, 리듀서
const GET_CARTS = "GET_CARTS";
const GET_CARTS_ERROR = "GET_CARTS_ERROR";
const GET_CARTS_SUCCESS = "GET_CARTS_SUCCESS";

// 초기값 설정
const initialState = {
    cart: {
        loading: false,
        data: null,
        error: null
    },
}

// 홈으로 이동 함수
export const goHome = (navigate) => () => {
    navigate('/');
}

// thunk 함수를 사용해서 액션객체 디스패치하기
export const getCarts = () => async dispatch => {
    dispatch({ type: GET_CARTS }) // 요청시작
    try{
        const userId = getCookie('userId');
        const response = await axios.get(`${API_URL}/mypage/${userId}`)
        const cart = response.data;
        dispatch({ type: GET_CARTS_SUCCESS, cart })
    }
    catch(e) {
        dispatch({ type: GET_CARTS_ERROR, error: e})
    }
}

// 리듀서 만들기
export default function cart(state = initialState, action) {
    switch(action.type) {
        case GET_CARTS:
            return {
                ...state,
                cart: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_CARTS_SUCCESS:
            return {
                ...state,
                cart: {
                    loading: false,
                    data: action.cart,
                    error: null
                }
            }
        case GET_CARTS_ERROR:
            return {
                ...state,
                cart: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}