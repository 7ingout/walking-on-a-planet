import axios from 'axios'
import { API_URL } from '../config/constant'

// 리덕스 액션타입, 초기값, 액션 생성함수, 리듀서
const GET_RECOMMANDS = "GET_RECOMMANDS";
const GET_RECOMMANDS_ERROR = "GET_RECOMMANDS_ERROR";
const GET_RECOMMANDS_SUCCESS = "GET_RECOMMANDS_SUCCESS";

// 초기값 설정
const initialState = {
    recommands: {
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
export const getRecommands = () => async dispatch => {
    dispatch({ type: GET_RECOMMANDS }) // 요청시작
    try{
        const response = await axios.get(`${API_URL}/recommands`)
        const recommands = response.data;
        dispatch({ type: GET_RECOMMANDS_SUCCESS, recommands })
    }
    catch(e) {
        dispatch({ type: GET_RECOMMANDS, error: e})
    }
}

// 리듀서 만들기
export default function recommands(state = initialState, action) {
    switch(action.type) {
        case GET_RECOMMANDS:
            return {
                ...state,
                recommands: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_RECOMMANDS_SUCCESS:
            return {
                ...state,
                recommands: {
                    loading: false,
                    data: action.recommands,
                    error: null
                }
            }
        case GET_RECOMMANDS_ERROR:
            return {
                ...state,
                recommands: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}