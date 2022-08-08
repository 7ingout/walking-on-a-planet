import axios from 'axios'
import { API_URL } from '../config/constant'

// 리덕스 액션타입, 초기값, 액션 생성함수, 리듀서
const GET_VISUALS = "GET_VISUALS";
const GET_VISUALS_ERROR = "GET_VISUALS_ERROR";
const GET_VISUALS_SUCCESS = "GET_VISUALS_SUCCESS";

// 초기값 설정
const initialState = {
    visuals: {
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
export const getVisuals = () => async dispatch => {
    dispatch({ type: GET_VISUALS }) // 요청시작
    try{
        const response = await axios.get(`${API_URL}/visuals`)
        const visuals = response.data;
        dispatch({ type: GET_VISUALS_SUCCESS, visuals })
    }
    catch(e) {
        dispatch({ type: GET_VISUALS_ERROR, error: e})
    }
}

// 리듀서 만들기
export default function visuals(state = initialState, action) {
    switch(action.type) {
        case GET_VISUALS:
            return {
                ...state,
                visuals: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_VISUALS_SUCCESS:
            return {
                ...state,
                visuals: {
                    loading: false,
                    data: action.visuals,
                    error: null
                }
            }
        case GET_VISUALS_ERROR:
            return {
                ...state,
                visuals: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}